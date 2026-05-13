import { CustomError } from "../../../common/errors/custom.error.js";
import { validateRequired } from "../../../common/utils/validate.util.js";

import {
  addMission,
  getMissionsByStoreId,
} from "../repositories/mission.repository.js";

import { getStoreById } from "../../stores/repositories/store.repository.js";

import { CreateMissionRequest } from "../dtos/misison.request.dto.js";
import { CreateMissionResponse } from "../dtos/mission.response.dto.js";

// 미션 생성
export const createMissionService = async (
  storeId: number,
  data: CreateMissionRequest,
): Promise<CreateMissionResponse> => {

  validateRequired(storeId, "storeId 필요");
  validateRequired(data.title, "title 필요");
  validateRequired(data.description, "description 필요");
  validateRequired(data.reward, "reward 필요");

  const store = await getStoreById(storeId);

  if (!store) {
    throw new CustomError(
      404,
      "가게를 찾을 수 없습니다.",
    );
  }

  const mission = await addMission({
    storeId,
    title: data.title,
    description: data.description,
    reward: data.reward,
  });

  return {
    missionId: mission.missionId,
    storeId: mission.storeId,
    title: mission.title,
    description: mission.description,
    reward: mission.reward,
    createdAt: mission.createdAt,
  };
};

// 가게 미션 조회
export const getStoreMissionsService = async (
  storeId: number,
): Promise<CreateMissionResponse[]> => {

  validateRequired(storeId, "storeId 필요");

  const store = await getStoreById(storeId);

  if (!store) {
    throw new CustomError(
      404,
      "가게를 찾을 수 없습니다.",
    );
  }

  const missions = await getMissionsByStoreId(storeId);

  return missions.map((mission) => ({
    missionId: mission.missionId,
    storeId: mission.storeId,
    title: mission.title,
    description: mission.description,
    reward: mission.reward,
    createdAt: mission.createdAt,
  }));
};