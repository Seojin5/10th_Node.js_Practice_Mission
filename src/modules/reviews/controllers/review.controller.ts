import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createReviewService, getMyReviewsService } from "../services/review.service.js";
import { ApiResponse } from "../../../utils/api.response.js";
import { CustomError } from "../../../errors/custom.error.js";

export const createReview = async (req: Request, res: Response) => {
  try {
    const result = await createReviewService(req.body);

    return res.status(StatusCodes.CREATED).json(
      ApiResponse.success(
        201,
        "리뷰 작성 성공",
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
