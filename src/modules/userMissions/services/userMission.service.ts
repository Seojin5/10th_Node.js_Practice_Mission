import { prisma } from "../../../db.config.js";
import {
  addUserMission,
  checkUserMission
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

// 미션 조회
  const mission = await prisma.mission.findUnique({
    where: { missionId },
  });

  if (!mission) {
    throw { status: 404, message: "미션 없음" };
  }

// 중복 확인
  const exist = await checkUserMission(userId, missionId);
  if (exist) {
    throw { status: 409, message: "이미 도전 중인 미션입니다." };
  }

// 
  const userMissionId = await addUserMission(
    userId, 
    missionId, 
    mission.storeId
  );

  return { userMissionId };
};

