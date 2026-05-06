import { prisma } from "../../../db.config.js";

// 미션 생성
export const addMission = async (data: any) => {

  try {
    const mission = await prisma.mission.create({
      data: {
        storeId: data.storeId,
        title: data.title,
        description: data.description,
        reward: data.reward,
      },
    });

    return mission.missionId;
  } catch (err) {
    throw new Error(`미션 생성 오류: ${err}`);
  }
};

// 미션 조회
export const getMissionById = async (missionId: number) => {

  try {
    return await prisma.mission.findUnique({
      where: { missionId },
    });
  } catch (err) {
    throw new Error(`미션 조회 오류: ${err}`);
  }
};