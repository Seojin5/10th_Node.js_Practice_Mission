import { prisma } from "../../../db.config.js";

interface AddReviewParams {
  userId: number;
  storeId: number;
  userMissionId: number;
  rating: number;
  content: string;
}

// 리뷰 생성
export const addReview = async (
  data: AddReviewParams
) => {

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
};

// 중복 체크
export const checkReview = async (
  userId: number,
  userMissionId: number
): Promise<boolean> => {

  const exist = await prisma.review.findUnique({
  where: {
    userId_userMissionId: {
      userId,
      userMissionId,
    },
  },
  select: {
    reviewId: true,
  },
});
  return !!exist;
};

// 사용자가 작성한 리뷰 목록 조회
export const getReviewsByUserId = async (
  userId: number
) => {
  
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
};