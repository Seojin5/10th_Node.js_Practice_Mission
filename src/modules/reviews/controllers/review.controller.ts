import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createReviewService, getMyReviewsService } from "../services/review.service.js";
import { ApiResponse } from "../../../utils/api.response.js";

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
    return res.status(err.status || 500).json(
      ApiResponse.error(
        err.status || 500,
        "리뷰 작성 실패",
      )
    );
  }
};

export const getMyReviews = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);

    const result = await getMyReviewsService(userId);

    return res.status(StatusCodes.OK).json(
      ApiResponse.success(
        200,
        "내 리뷰 조회 성공",
        result
      )
    );
  } catch (err: any) {
    return res.status(err.status || 500).json(
      ApiResponse.error(
        err.status || 500,
        "리뷰 조회 실패",
      )
    );
  }
};
