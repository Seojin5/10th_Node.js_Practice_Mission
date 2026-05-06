export interface CreateReviewRequest {
  userId: number;
  storeId: number;
  userMissionId: number;
  rating: number;
  content: string;
}

export const bodyToReview = (body: CreateReviewRequest) => {
  return {
    userId: body.userId,
    storeId: body.storeId,
    userMissionId: body.userMissionId,
    rating: body.rating,
    content: body.content,
  };
};

export const responseFromReview = (review: any) => {
  return {
    id: review.id,
    userId: review.userId,
    storeId: review.storeId,
    rating: review.rating,
    content: review.content,
    createdAt: review.createdAt,
    deletedAt: review.deletedAt,
  };
};


