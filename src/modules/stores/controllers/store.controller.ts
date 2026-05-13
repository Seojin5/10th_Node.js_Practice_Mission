import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createStoreService } from "../services/store.service.js";
import { ApiResponse } from "../../../utils/api.response.js";

// 가게 생성
export const createStore = async (req: Request, res: Response) => {
  try {
    const result = await createStoreService(req.body);

    return res.status(StatusCodes.CREATED).json(
      ApiResponse.success(
        201,
        "가게 생성 성공",
        result
      )
    );
  } catch (err: any) {
    return res.status(400).json(
      ApiResponse.error(
        err.status || 400,
        "가게 미션 조회 실패"
      )
    );
  }
};


