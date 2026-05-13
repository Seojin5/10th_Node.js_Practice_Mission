import { Body, Controller, Post, Route, Tags, SuccessResponse, Response } from "tsoa";
import { StatusCodes } from "http-status-codes";

import { createStoreService } from "../services/store.service.js";

import { ApiResponse } from "../../../utils/api.response.js";
import { CustomError } from "../../../errors/custom.error.js";

@Route("stores")
@Tags("Stores")
export class StoreController extends Controller {

  @SuccessResponse(StatusCodes.CREATED, "가게 생성 성공")
  @Response(500, "서버 내부 오류")
  @Post()
  public async createStore(
    @Body() body: any,
  ) {
    try {

      const result = await createStoreService(body);

      this.setStatus(StatusCodes.CREATED);

      return ApiResponse.success(
        201,
        "가게 생성 성공",
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