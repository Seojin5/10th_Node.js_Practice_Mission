export interface CreateMissionDto {
  storeId: number;
  title: string;
  description : string,
  reward: number;
}

export const responseFromMission = (mission: any) => {
  return {
    missionId: mission.mission_id,
    storeId: mission.store_id,
    title: mission.title,
    description: mission.description,
    reward: mission.reward,
    createdAt: mission.created_at,
  };
};

