import { CustomError } from "../../../common/errors/custom.error.js";

import {
  addUserMission,
  checkUserMission,
  completeUserMission,
  getReceivedMissionsByUserId,
  getUserMissionById,
} from "../repositories/userMission.repository.js";

import { getMissionById } from "../../missions/repositories/mission.repository.js";

import { prisma } from "../../../db.config.js";

import { validateRequired } from "../../../common/utils/validate.util.js";

import { ChallengeMissionResponse } from "../dtos/userMission.response.dto.js";

// 미션 도전
export const challengeMissionService = async (
  missionId: number,
  userId: number,
): Promise<{ userMissionId: number }> => {

  validateRequired(userId, "userId 필요");
  validateRequired(missionId, "missionId 필요");

  const mission = await getMissionById(missionId);

  if (!mission) {
    throw new CustomError(
      404,
      "미션 없음",
      "MISSION_NOT_FOUND",
    );
  }

  const exist = await checkUserMission(
    userId,
    missionId,
  );

  if (exist) {
    throw new CustomError(
      409,
      "이미 도전 중인 미션입니다.",
      "MISSION_ALREADY_CHALLENGED",
    );
  }

  const userMission = await addUserMission({
    userId,
    missionId,
    storeId: mission.storeId,
  });

  return {
    userMissionId: userMission.userMissionId,
  };
};

// 진행중 미션 조회
export const getReceivedMissionsService = async (
  userId: number,
) => {

  validateRequired(userId, "userId 필요");

  return await getReceivedMissionsByUserId(userId);
};

// 미션 완료
export const completeUserMissionService = async (
  userMissionId: number,
  userId: number,
): Promise<ChallengeMissionResponse> => {

  validateRequired(userMissionId, "userMissionId 필요");
  validateRequired(userId, "userId 필요");

  const userMission = await getUserMissionById(
    userMissionId,
  );

  if (!userMission) {
    throw new CustomError(
      404,
      "미션 없음",
      "USER_MISSION_NOT_FOUND",
    );
  }

  if (userMission.userId !== userId) {
    throw new CustomError(
      403,
      "권한 없음",
      "FORBIDDEN",
    );
  }

  if (userMission.status === "COMPLETED") {
    throw new CustomError(
      409,
      "이미 완료된 미션",
      "MISSION_ALREADY_COMPLETED",
    );
  }

  const reward = userMission.mission.reward;

  const updated = await prisma.$transaction(
  async (tx) => {

    const completedMission =
      await completeUserMission(
        userMissionId,
        tx,
      );

    await tx.user.update({
      where: { userId },
      data: {
        point: {
          increment: reward,
        },
      },
    });

    return completedMission;
  },
);

  return {
    userMissionId: updated.userMissionId,
    userId: updated.userId,
    missionId: updated.missionId,
    status: updated.status,
    receivedAt: updated.receivedAt,
    completedAt: updated.completedAt,
  };
};