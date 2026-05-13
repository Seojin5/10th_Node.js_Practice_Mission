import { Body, Controller, Post, Route, Tags, SuccessResponse, Response } from "tsoa";
import { StatusCodes } from "http-status-codes";

import { createStoreService } from "../services/store.service.js";

import { ApiResponse } from "../../../common/responses/api.response.js";

@Route("stores")
@Tags("Stores")
export class StoreController extends Controller {

  @SuccessResponse(StatusCodes.CREATED, "가게 생성 성공")
  @Response(500, "서버 내부 오류")
  @Post()
  public async createStore(
    @Body() body: any,
   ) {

    const result = await createStoreService(body);

    this.setStatus(StatusCodes.CREATED);

    return ApiResponse.success(
      201,
      "가게 생성 성공",
      result,
    );
  }
}