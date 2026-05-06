import { Request, Response } from "express";
import { createMissionService } from "../services/mission.service.js";

export const createMission = async (req: Request, res: Response) => {
  try {
    const storeId = Number(req.params.storeId);
    const result = await createMissionService(storeId, req.body);

    return res.status(201).json({
      success: true,
      code: 201,
      message: "미션 생성 성공",
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

