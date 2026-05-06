import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createReviewService } from "../services/review.service.js";

export const createReview = async (req: Request, res: Response) => {
  try {
    const result = await createReviewService(req.body);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      code: 201,
      message: "리뷰 작성 성공",
      data: result
    });

  } catch (err: any) {
    return res.status(err.status || 500).json({
      success: false,
      code: err.status || 500,
      message: err.message,
      error: { detail: err.detail || "unexpected error" }
    });
  }
};

