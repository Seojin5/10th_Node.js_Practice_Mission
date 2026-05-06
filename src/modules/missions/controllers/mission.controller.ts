import { Request, Response } from "express";
import { 
  createMissionService,
  getStoreMissionsService 
} from "../services/mission.service.js";

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
      message: "미션 생성 실패",
    });
  }
};

export const getStoreMissions = async (req: Request, res: Response) => {
  try {
    const storeId = Number(req.params.storeId);

    const result = await getStoreMissionsService(storeId);

    return res.status(200).json({
      success: true,
      code: 200,
      message: "가게 미션 조회 성공",
      data: result,
    });
  } catch (err: any) {
    return res.status(err.status || 500).json({
      success: false,
      code: err.status || 500,
      message: "가게 미션 조회 실패",
    });
  }
};