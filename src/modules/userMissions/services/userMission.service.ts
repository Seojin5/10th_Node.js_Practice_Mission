import { CustomError } from "../../../errors/custom.error.js";
import {
  addUserMission,
  checkUserMission,
  getReceivedMissionsByUserId,
  completeUserMission,
  getUserMissionById,
} from "../repositories/userMission.repository.js";

import { prisma } from "../../../db.config.js";

import { ChallengeMissionResponse } from "../dtos/userMission.response.dto.js";

// 미션 도전
export const challengeMissionService = async (
  missionId: number,
  userId: number,
): Promise<{ userMissionId: number }> => {
  if (!userId) {
    throw new CustomError(400, "userId 필요");
  }

  const mission = await prisma.mission.findUnique({
    where: { missionId },
  });

  if (!mission) {
    throw new CustomError(404, "미션 없음");
  }

  const exist = await checkUserMission(userId, missionId);
  if (exist) {
    throw new CustomError(409, "이미 도전 중인 미션입니다.");
  }

  const userMission = await addUserMission({
    userId,
    missionId,
    storeId: mission.storeId,
  });

  return { userMissionId: userMission.userMissionId };
};

// 진행중 미션 조회
export const getReceivedMissionsService = async (userId: number) => {
  if (!userId) {
    throw new CustomError(400, "userId 필요");
  }

  return await getReceivedMissionsByUserId(userId);
};

// 미션 완료
export const completeUserMissionService = async (
  userMissionId: number,
  userId: number,
): Promise<ChallengeMissionResponse> => {
  if (!userMissionId || !userId) {
    throw new CustomError(400, "필수 값 누락");
  }

  const userMission = await getUserMissionById(userMissionId);

  if (!userMission) {
    throw new CustomError(404, "미션 없음");
  }

  if (userMission.userId !== userId) {
    throw new CustomError(403, "권한 없음");
  }

  if (userMission.status === "COMPLETED") {
    throw new CustomError(409, "이미 완료된 미션");
  }

  const reward = userMission.mission.reward;

  const updated = await completeUserMission(userMissionId);

  await prisma.user.update({
    where: { userId },
    data: {
      point: {
        increment: reward,
      },
    },
  });

  return {
    userMissionId: updated.userMissionId,
    userId: updated.userId,
    missionId: updated.missionId,
    status: updated.status,
    receivedAt: updated.receivedAt,
    completedAt: updated.completedAt,
  };
};