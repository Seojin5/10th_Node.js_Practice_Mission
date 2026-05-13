import { Request, Response } from "express";
import { 
  challengeMissionService,
  getReceivedMissionsService,
  completeUserMissionService
} from "../services/userMission.service.js";
import { ApiResponse } from "../../../utils/api.response.js";

// 미션 도전
export const challengeMission = async (req: Request, res: Response) => {
  try {
    const missionId = Number(req.params.missionId);
    const result = await challengeMissionService(missionId, req.body.userId);

    return res.status(201).json(
      ApiResponse.success(
        201,
        "미션 도전 성공",
        result
      )
    );
  } catch (err: any) {
    return res.status(err.status || 500).json(
      ApiResponse.error(
        err.status || 500,
      "미션 도전 실패",
      )
    );
  }
};

// 진행중 미션 조회
export const getReceivedMissions = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);

    const result = await getReceivedMissionsService(userId);

    return res.status(200).json(
      ApiResponse.success(
        201,
        "진행중 미션 조회 성공",
        result
      )
    );
  } catch (err: any) {
    return res.status(err.status || 500).json(
      ApiResponse.error(
        err.status || 500,
        "진행중 미션 조회 실패",
      )
    );
  }
};

export const completeUserMission = async (req: Request, res: Response) => {
  try {
    const userMissionId = Number(req.params.userMissionId);
    const userId = Number(req.body.userId);

    const result = await completeUserMissionService(userMissionId, userId);

    return res.status(200).json(
      ApiResponse.success(
        200,
        "미션 완료 처리 성공",
        result
      )
    );
  } catch (err: any) {
    return res.status(err.status || 500).json(
      ApiResponse.error(
        err.status || 500,
        "미션 완료 처리 실패",
      )
    );
  }
};