import { Body, Controller, Path, Post, Route, Tags, SuccessResponse, Response, Get } from "tsoa";

import { 
  createMissionService,
  getStoreMissionsService 
} from "../services/mission.service.js";

import { ApiResponse } from "../../../utils/api.response.js";
import { CustomError } from "../../../errors/custom.error.js";

@Route("missions")
@Tags("Missions")
export class MissionController extends Controller {

  @SuccessResponse(201, "미션 생성 성공")
  @Response(500, "서버 내부 오류")
  @Post("{storeId}")
  public async createMission(
    @Path() storeId: number,
    @Body() body: any,
  ) {
    try {
    const result = await createMissionService(
        storeId,
        body
      );

      this.setStatus(201);

      return ApiResponse.success(
        201,
        "미션 생성 성공",
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

    return ApiResponse.error(
        500,
        "서버 내부 오류"
    );
  }
};

@SuccessResponse(200, "가게 미션 조회 성공")
  @Response(500, "서버 내부 오류")
  @Get("{storeId}")
  public async getStoreMissions(
    @Path() storeId: number,
  ) {
    try {

      const result = await getStoreMissionsService(storeId);

      this.setStatus(200);

      return ApiResponse.success(
        200,
        "가게 미션 조회 성공",
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