import { Body, Controller, Path, Post, Route, Tags, SuccessResponse, Response, Get } from "tsoa";
import { StatusCodes } from "http-status-codes";

import { createReviewService, getMyReviewsService } from "../services/review.service.js";

import { ApiResponse } from "../../../utils/api.response.js";
import { CustomError } from "../../../errors/custom.error.js";

@Route("reviews")
@Tags("Reviews")
export class ReviewController extends Controller {

  @SuccessResponse(StatusCodes.CREATED, "리뷰 작성 성공")
  @Response(500, "서버 내부 오류")
  @Post()
  public async createReview(
    @Body() body: any,
  ) {
    try {

      const result = await createReviewService(body);

      this.setStatus(StatusCodes.CREATED);

      return ApiResponse.success(
        201,
        "리뷰 작성 성공",
        result
      );

    } catch (err) {

      if (err instanceof CustomError) {

        this.setStatus(err.status);

        return ApiResponse.error(
          err.status,
          err.message
        );
      }

      this.setStatus(500);

      return ApiResponse.error(
        500,
        "서버 내부 오류"
      );
    }
  }

  @SuccessResponse(StatusCodes.OK, "내 리뷰 조회 성공")
  @Response(500, "서버 내부 오류")
  @Get("{userId}")
  public async getMyReviews(
    @Path() userId: number,
  ) {
    try {

      const result = await getMyReviewsService(userId);

      this.setStatus(StatusCodes.OK);

      return ApiResponse.success(
        200,
        "내 리뷰 조회 성공",
        result
      );

    } catch (err) {

      if (err instanceof CustomError) {

        this.setStatus(err.status);

        return ApiResponse.error(
          err.status,
          err.message
        );
      }

      this.setStatus(500);

      return ApiResponse.error(
        500,
        "서버 내부 오류"
      );
    }
  }
}