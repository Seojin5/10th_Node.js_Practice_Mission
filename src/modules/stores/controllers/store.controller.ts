import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createStoreService } from "../services/store.service.js";
import { ApiResponse } from "../../../utils/api.response.js";
import { CustomError } from "../../../errors/custom.error.js";

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


