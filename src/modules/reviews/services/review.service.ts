import { CreateReviewRequest } from "../dtos/review.request.dto.js";
import { CreateReviewResponse } from "../dtos/review.response.dto.js";

import {
  addReview,
  checkReview,
  getReviewsByUserId,
} from "../repositories/review.repository.js";

import { getStoreById } from "../../stores/repositories/store.repository.js";
import { CustomError } from "../../../errors/custom.error.js";

// 리뷰 생성
export const createReviewService = async (
  data: CreateReviewRequest,
): Promise<CreateReviewResponse> => {
  const { userId, storeId, userMissionId, rating, content } = data;

  // 1. 가게 존재 확인
  const store = await getStoreById(storeId);
  if (!store) {
    throw new CustomError(404, "가게 없음");
  }

  // 2. 중복 리뷰 체크
  const exist = await checkReview(userId, userMissionId);
  if (exist) {
    throw new CustomError(409, "이미 리뷰 있음");
  }

  // 3. 생성
  const review = await addReview({
    userId,
    storeId,
    userMissionId,
    rating,
    content,
  });

  // 4. DTO 반환
  return {
    reviewId: review.reviewId,
    userId: review.userId,
    storeId: review.storeId,
    rating: review.rating,
    content: review.content,
    createdAt: review.createdAt,
    deletedAt: review.deletedAt ?? undefined,
  };
};

// 내 리뷰 조회
export const getMyReviewsService = async (
  userId: number,
): Promise<CreateReviewResponse[]> => {
  if (!userId) {
    throw new CustomError(400, "userId 필요");
  }

  const reviews = await getReviewsByUserId(userId);

  return reviews.map((r) => ({
    reviewId: r.reviewId,
    userId: r.userId,
    storeId: r.storeId,
    rating: r.rating,
    content: r.content,
    createdAt: r.createdAt,
    deletedAt: r.deletedAt ?? undefined,
  }));
};