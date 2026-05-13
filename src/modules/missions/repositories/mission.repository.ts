import { prisma } from "../../../db.config.js";

interface AddMissionParams {
  storeId: number;
  title: string;
  description: string;
  reward: number;
}

// 미션 생성
export const addMission = async (data: AddMissionParams) => {
  return await prisma.mission.create({
    data: {
      storeId: data.storeId,
      title: data.title,
      description: data.description,
      reward: data.reward,
    },
  });
};

// 미션 조회 (단건)
export const getMissionById = async (missionId: number) => {
  return prisma.mission.findUnique({
    where: { missionId },
  });
};

// 특정 가게 미션 목록 조회
export const getMissionsByStoreId = async (storeId: number) => {
  return await prisma.mission.findMany({
    where: {
      storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};