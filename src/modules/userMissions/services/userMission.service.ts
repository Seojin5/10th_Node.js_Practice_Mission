import { prisma } from "../../../db.config.js";
import {
  addUserMission,
  checkUserMission,
  getReceivedMissionsByUserId,
  completeUserMission
} from "../repositories/userMission.repository.js";

import { getMissionById } from "../../missions/repositories/mission.repository.js";

// 유저 확인
export const challengeMissionService = async (
  missionId: number, 
  userId: number
) => {
  if (!userId) {
    throw { status: 400, message: "userId 필요" };
  }

  const mission = await prisma.mission.findUnique({
    where: { missionId },
  });

  if (!mission) {
    throw { status: 404, message: "미션 없음" };
  }

  const exist = await checkUserMission(userId, missionId);
  if (exist) {
    throw { status: 409, message: "이미 도전 중인 미션입니다." };
  }

  const userMissionId = await addUserMission(
    userId, 
    missionId, 
    mission.storeId
  );

  return { userMissionId };
};

export const getReceivedMissionsService = async (userId: number) => {
  if (!userId) {
    throw { status: 400, message: "userId 필요" };
  }

  const missions = await getReceivedMissionsByUserId(userId);

  return missions;
};


export const completeUserMissionService = async (
  userMissionId: number,
  userId: number
) => {
  if (!userMissionId || !userId) {
    throw { status: 400, message: "필수 값 누락" };
  }

  // userMission + mission 같이 조회
  const userMission = await prisma.userMission.findUnique({
    where: { userMissionId },
    include: {
      mission: true,
    },
  });

  if (!userMission) {
    throw { status: 404, message: "미션 없음" };
  }

  if (userMission.userId !== userId) {
    throw { status: 403, message: "권한 없음" };
  }

  if (userMission.status === "COMPLETED") {
    throw { status: 409, message: "이미 완료된 미션" };
  }

  const reward = userMission.mission.reward;

  // 상태 변경
  const updated = await completeUserMission(userMissionId);

  // 포인트 지급
  await prisma.user.update({
    where: { userId },
    data: {
      point: {
        increment: reward,
      },
    },
  });

  return updated;
};