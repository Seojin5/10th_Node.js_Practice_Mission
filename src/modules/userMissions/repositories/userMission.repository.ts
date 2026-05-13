import { prisma } from "../../../db.config.js";

interface AddUserMissionParams {
  userId: number;
  missionId: number;
  storeId: number;
}

// 미션 추가
export const addUserMission = async (
  data: AddUserMissionParams
): Promise<number> => {
  
  const userMission =
    await prisma.userMission.create({
      data: {
        userId: data.userId,
        missionId: data.missionId,
        storeId: data.storeId,
        status: "RECEIVED",
      },
    });

  return userMission.userMissionId;
};

export const checkUserMission = async (
  userId: number,
  missionId: number
): Promise<boolean> => {
  
  const exist = await prisma.userMission.findFirst({
    where: {
      userId,
      missionId,
    },
  });

  return !!exist;
};

// 진행중 미션 목록
export const getReceivedMissionsByUserId = async (
  userId: number
) => {

  return await prisma.userMission.findMany({
    where: {
      userId,
      status: "RECEIVED",
    },
    orderBy: {
      receivedAt: "desc",
    },
    include: {
      mission: true,
      store: true,
    },
  });
};

export const completeUserMission = async (
  userMissionId: number
) => {

  return await prisma.userMission.update({
    where: {
      userMissionId,
    },
    data: {
      status: "COMPLETED",
      completedAt: new Date(),
    },
  });
};