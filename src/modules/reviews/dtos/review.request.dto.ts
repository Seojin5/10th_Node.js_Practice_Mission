export interface CreateReviewRequest {
  userId: number;
  storeId: number;
  userMissionId: number;
  rating: number;
  content: string;
}