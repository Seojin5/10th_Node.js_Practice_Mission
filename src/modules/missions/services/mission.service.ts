import { prisma } from "../../../db.config.js";
import { 
  addMission,
  getMissionsByStoreId  
} from "../repositories/mission.repository.js";
import { getStoreById } from "../../stores/repositories/store.repository.js";
import { CustomError } from "../../../errors/custom.error.js";

export const createMissionService = async (
  storeId: number, 
  data: any
) => {
  const { title, reward } = data;

  if (!title || !reward) {
    throw new CustomError(
      400,
      "필수 값 누락"  
    );
  }

  // 가게 존재 확인
  const store = await getStoreById(storeId);
  if (!store) {
    throw new CustomError(
      404,
      "가게를 찾을 수 없습니다."
    );
  }

  const missionId = await addMission({
    storeId,
    title,
    reward
  });

  return { missionId };
};

export const getStoreMissionsService = async (storeId: number) => {
  if (!storeId) {
    throw new CustomError(
      400,
      "storeId 필요"
    );
  }

  // 가게 존재 확인
  const store = await getStoreById(storeId);
  if (!store) {
    throw new CustomError(
      404,
      "가게를 찾을 수 없습니다."
    );
  }

  const missions = await getMissionsByStoreId(
    storeId
  );

  return missions;
};
