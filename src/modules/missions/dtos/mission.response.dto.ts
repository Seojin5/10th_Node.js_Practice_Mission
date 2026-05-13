export interface CreateMissionResponse {
  missionId: number;
  storeId: number;
  title: string;
  description: string;
  reward: number;
  createdAt: Date;
}