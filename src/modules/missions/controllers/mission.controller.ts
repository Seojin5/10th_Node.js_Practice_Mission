import { Body, Controller, Path, Post, Route, Tags, SuccessResponse, Response, Get } from "tsoa";

import { 
  createMissionService,
  getStoreMissionsService 
} from "../services/mission.service.js";

import { ApiResponse } from "../../../common/responses/api.response.js";

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

    const result = await createMissionService(
      storeId,
      body,
    );

    this.setStatus(201);

    return ApiResponse.success(
      201,
      "미션 생성 성공",
      result,
    );
  }

  @SuccessResponse(200, "가게 미션 조회 성공")
  @Response(500, "서버 내부 오류")
  @Get("{storeId}")
  public async getStoreMissions(
    @Path() storeId: number,
  ) {

    const result = await getStoreMissionsService(storeId);

    this.setStatus(200);

    return ApiResponse.success(
      200,
      "가게 미션 조회 성공",
      result,
    );
  }
}