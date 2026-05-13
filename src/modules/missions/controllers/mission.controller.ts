import { Request, Response } from "express";
import { 
  createMissionService,
  getStoreMissionsService 
} from "../services/mission.service.js";
import { ApiResponse } from "../../../utils/api.response.js";
import { CustomError } from "../../../errors/custom.error.js";

export const createMission = async (req: Request, res: Response) => {
  try {
    const storeId = Number(req.params.storeId);
    const result = await createMissionService(storeId, req.body);

    return res.status(201).json(
      ApiResponse.success(
        201,
        "미션 생성 성공",
        result
      )
    );

  } catch (err) {

    if (err instanceof CustomError) {
      return res.status(err.status).json(
        ApiResponse.error(
          err.status,
          err.message
        )
      );
    }

    return res.status(500).json(
      ApiResponse.error(
        500,
        "서버 내부 오류"
      )
    );
  }
};

export const getStoreMissions = async (req: Request, res: Response) => {
  try {
    const storeId = Number(req.params.storeId);
    const result = await getStoreMissionsService(storeId);

    return res.status(200).json(
      ApiResponse.success(
        200,
        "가게 미션 조회 성공",
        result
      )
    );
  } catch (err) {

    if (err instanceof CustomError) {
      return res.status(err.status).json(
        ApiResponse.error(
          err.status,
          err.message
        )
      );
    }

    return res.status(500).json(
      ApiResponse.error(
        500,
        "서버 내부 오류"
      )
    );
  }
};