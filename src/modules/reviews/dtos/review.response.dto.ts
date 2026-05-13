export interface CreateReviewResponse {
  reviewId: number;
  userId: number;
  storeId: number;
  rating: number;
  content: string;
  createdAt: Date;
  deletedAt?: Date;
}