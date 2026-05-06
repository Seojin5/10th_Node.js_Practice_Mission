import { bodyToReview } from "../dtos/review.dto.js";
import { 
  addReview, 
  checkReview, 
  getReviewsByUserId, 
} from "../repositories/review.repository.js";
import { getStoreById } from "../../stores/repositories/store.repository.js";

export const createReviewService = async (data: any) => {
  const converted = bodyToReview(data);

  const store = await getStoreById(converted.storeId);
  if (!store) {
    throw { status: 404, message: "가게 없음" };
  }

  const exist = await checkReview(
    converted.userId, 
    converted.userMissionId
  );
  
  if (exist) {
    throw { status: 409, message: "이미 리뷰 있음" };
  }

  const reviewId = await addReview(converted);

  return { reviewId };
};

export const getMyReviewsService = async (userId: number) => {
  if (!userId) {
    throw { status: 400, message: "userId 필요" };
  }

  const reviews = await getReviewsByUserId(userId);

  return reviews;
};
