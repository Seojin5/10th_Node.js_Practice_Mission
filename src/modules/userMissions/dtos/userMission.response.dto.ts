export interface ChallengeMissionResponse {
  userMissionId: number;
  userId: number;
  missionId: number;
  status: string;
  receivedAt: Date;
  completedAt: Date | null;
}