import {
  addUserMission,
  checkUserMission
} from "../repositories/userMission.repository.js";

import { getMissionById } from "../../missions/repositories/mission.repository.js";

export const challengeMissionService = async (missionId: number, userId: number) => {
  if (!userId) {
    throw { status: 400, message: "userId 필요" };
  }

  const mission = await getMissionById(missionId);
  if (!mission) {
    throw { status: 404, message: "미션을 찾을 수 없습니다." };
  }

  const exist = await checkUserMission(userId, missionId);
  if (exist) {
    throw { status: 409, message: "이미 도전 중인 미션입니다." };
  }

  const userMissionId = await addUserMission(userId, missionId);

  return { userMissionId };
};

