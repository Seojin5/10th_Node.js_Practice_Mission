import { bodyToReview } from "../dtos/review.dto.js";
import { 
  addReview, 
  checkReview, 
  getReviewsByUserId, 
} from "../repositories/review.repository.js";
import { getStoreById } from "../../stores/repositories/store.repository.js";
import { CustomError } from "../../../errors/custom.error.js";

export const createReviewService = async (
  data: any
) => {
  const converted = bodyToReview(data);

  const store = await getStoreById(
    converted.storeId
  );
  if (!store) {
    throw new CustomError(
      404,
      "가게 없음"
    );
  }

  const exist = await checkReview(
    converted.userId, 
    converted.userMissionId
  );
  
  if (exist) {
    throw new CustomError(
      409,
      "이미 리뷰 있음"
    );
  }

  const reviewId = await addReview(converted);

  return { reviewId };
};

export const getMyReviewsService = async (
  userId: number
) => {
  if (!userId) {
    throw new CustomError(
      400,
      "userId 필요"
    );
  }
  const reviews = await getReviewsByUserId(userId);

  return reviews;
};
