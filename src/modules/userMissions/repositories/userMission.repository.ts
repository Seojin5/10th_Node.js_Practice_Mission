import { prisma } from "../../../db.config.js";

// 미션 추가
export const addUserMission = async (
  userId: number,
  missionId: number,
  storeId: number
): Promise<number> => {
  try {
    const userMission = await prisma.userMission.create({
      data: {
        userId,
        missionId,
        storeId,
        status: "RECEIVED",
      },
    });

    return userMission.userMissionId;
  } catch (err) {
    throw new Error(`유저 미션 생성 오류: ${err}`);
  }
};

export const checkUserMission = async (
  userId: number,
  missionId: number
): Promise<boolean> => {
  try {
    const exist = await prisma.userMission.findFirst({
      where: {
        userId,
        missionId,
      },
    });

    return !!exist;

  } catch (err) {
    throw new Error(`중복 체크 오류: ${err}`);
  }
};

// 진행중 미션 목록
export const getReceivedMissionsByUserId = async (userId: number) => {
  try {
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
  } catch (err) {
    throw new Error(`진행중 미션 조회 오류: ${err}`);
  }
};

export const completeUserMission = async (userMissionId: number) => {
  try {
    return await prisma.userMission.update({
      where: {
        userMissionId,
      },
      data: {
        status: "COMPLETED",
        completedAt: new Date(),
      },
    });
  } catch (err) {
    throw new Error(`미션 완료 처리 오류: ${err}`);
  }
};