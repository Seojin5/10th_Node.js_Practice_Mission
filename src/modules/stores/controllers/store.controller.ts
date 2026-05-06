import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createStoreService } from "../services/store.service.js";

// 1. 가게 생성
export const createStore = async (req: Request, res: Response) => {
  try {
    const result = await createStoreService(req.body);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      code: 201,
      message: "가게 생성 성공",
      data: result
    });

  } catch (err: any) {
    return res.status(400).json({
      success: false,
      code: 400,
      message: err.message || "잘못된 요청입니다.",
      error: { detail: err.detail || "invalid request" }
    });
  }
};


