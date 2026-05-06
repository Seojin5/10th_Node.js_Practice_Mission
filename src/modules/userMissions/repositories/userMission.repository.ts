import { prisma } from "../../../db.config.js";

export const addUserMission = async (
  userId: number,
  missionId: number
): Promise<number> => {
  try {
    const userMission = await prisma.userMission.create({
      data: {
        userId,
        missionId,
        status: "ONGOING",
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