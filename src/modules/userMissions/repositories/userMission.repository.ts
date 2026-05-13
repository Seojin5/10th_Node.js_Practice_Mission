import { prisma } from "../../../db.config.js";

interface AddUserMissionParams {
  userId: number;
  missionId: number;
  storeId: number;
}

// 미션 추가
export const addUserMission = async (data: AddUserMissionParams) => {
  return await prisma.userMission.create({
    data: {
      userId: data.userId,
      missionId: data.missionId,
      storeId: data.storeId,
      status: "RECEIVED",
    },
  });
};

// 중복 체크
export const checkUserMission = async (
  userId: number,
  missionId: number,
): Promise<boolean> => {
  const exist = await prisma.userMission.findFirst({
    where: {
      userId,
      missionId,
    },
  });

  return !!exist;
};

// 진행중 미션 목록 조회
export const getReceivedMissionsByUserId = async (userId: number) => {
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

// 미션 완료 처리
export const completeUserMission = async (userMissionId: number) => {
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

// 단건 조회 (service에서 필요해서 추가 - 중요)
export const getUserMissionById = async (userMissionId: number) => {
  return await prisma.userMission.findUnique({
    where: {
      userMissionId,
    },
    include: {
      mission: true,
      store: true,
    },
  });
};