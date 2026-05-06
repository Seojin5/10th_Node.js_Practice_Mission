import { prisma } from "../../../db.config.js";

// 리뷰 생성
export const addReview = async (data: any) => {

  try {
    const review = await prisma.review.create({
      data: {
        userId: data.userId,
        storeId: data.storeId,
        userMissionId: data.userMissionId,
        rating: data.rating,
        content: data.content,
      },
    });

    return review.reviewId;
  } catch (err) {
    throw new Error(`리뷰 생성 오류: ${err}`);
  }
};

// 중복 체크
export const checkReview = async (
  userId: number,
  userMissionId: number
) => {

  try {
    const exist = await prisma.review.findFirst({
      where: {
        userId,
        userMissionId,
      },
    });

    return !!exist;
  } catch (err) {
    throw new Error(`리뷰 중복 체크 오류: ${err}`);
  }
};

// 사용자가 작성한 리뷰 목록 조회
export const getReviewsByUserId = async (userId: number) => {
  try {
    return await prisma.review.findMany({
      where: {
        userId,
        deletedAt: null,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        store: true,
        userMission: true,
      },
    });
  } catch (err) {
    throw new Error(`리뷰 조회 오류: ${err}`);
  }
};