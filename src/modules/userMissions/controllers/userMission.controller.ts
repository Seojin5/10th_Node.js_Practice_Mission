import { Request, Response } from "express";
import { challengeMissionService } from "../services/userMission.service.js";

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
      message: err.message,
      error: { detail: err.detail }
    });
  }
};

