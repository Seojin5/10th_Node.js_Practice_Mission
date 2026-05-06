import { Request, Response } from "express";
import { 
  challengeMissionService,
  getReceivedMissionsService,
  completeUserMissionService
} from "../services/userMission.service.js";

// 미션 도전
export const challengeMission = async (req: Request, res: Response) => {
  try {
    const missionId = Number(req.params.missionId);
    const result = await challengeMissionService(missionId, req.body.userId);

    return res.status(201).json({
      success: true,
      code: 201,
      message: "미션 도전 성공",
      data: result
    });

  } catch (err: any) {
    return res.status(err.status || 500).json({
      success: false,
      code: err.status || 500,
      message: "미션 도전 실패",
    });
  }
};

// 진행중 미션 조회
export const getReceivedMissions = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);

    const result = await getReceivedMissionsService(userId);

    return res.status(200).json({
      success: true,
      code: 200,
      message: "진행중 미션 조회 성공",
      data: result,
    });
  } catch (err: any) {
    return res.status(err.status || 500).json({
      success: false,
      code: err.status || 500,
      message: "진행중 미션 조회 실패",
    });
  }
};

export const completeUserMission = async (req: Request, res: Response) => {
  try {
    const userMissionId = Number(req.params.userMissionId);
    const userId = Number(req.body.userId);

    const result = await completeUserMissionService(userMissionId, userId);

    return res.status(200).json({
      success: true,
      code: 200,
      message: "미션 완료 처리 성공",
      data: result,
    });
  } catch (err: any) {
    return res.status(err.status || 500).json({
      success: false,
      code: err.status || 500,
      message: "미션 완료 처리 실패",
    });
  }
};