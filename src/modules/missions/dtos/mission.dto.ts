export interface CreateMissionDto {
  storeId: number;
  title: string;
  description : string,
  reward: number;
}

export const responseFromMission = (mission: any) => {
  return {
    missionId: mission.missionId,
    storeId: mission.storeId,
    title: mission.title,
    description: mission.description,
    reward: mission.reward,
    createdAt: mission.createdAt,
  };
};
