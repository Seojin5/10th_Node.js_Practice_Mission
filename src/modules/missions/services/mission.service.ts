import { prisma } from "../../../db.config.js";
import { 
  addMission,
  getMissionsByStoreId  
} from "../repositories/mission.repository.js";
import { getStoreById } from "../../stores/repositories/store.repository.js";

export const createMissionService = async (storeId: number, data: any) => {
  const { title, reward } = data;

  if (!title || !reward) {
    throw { status: 400, message: "필수 값 누락" };
  }

  // 가게 존재 확인
  const store = await getStoreById(storeId);
  if (!store) {
    throw { status: 404, message: "가게를 찾을 수 없습니다." };
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
    throw { status: 400, message: "storeId 필요" };
  }

  // 가게 존재 확인
  const store = await getStoreById(storeId);
  if (!store) {
    throw { status: 404, message: "가게를 찾을 수 없습니다." };
  }

  const missions = await getMissionsByStoreId(storeId);

  return missions;
};
