import { Body, Controller, Path, Post, Route, Tags, SuccessResponse, Response, Get, Patch } from "tsoa";

import { 
  challengeMissionService,
  getReceivedMissionsService,
  completeUserMissionService
} from "../services/userMission.service.js";

import { ApiResponse } from "../../../common/responses/api.response.js";

@Route("user-missions")
@Tags("UserMissions")
export class UserMissionController extends Controller {

  @SuccessResponse(201, "미션 도전 성공")
  @Response(500, "서버 내부 오류")
  @Post("{missionId}")
  public async challengeMission(
    @Path() missionId: number,
    @Body() body: any,
  ) {

    const result = await challengeMissionService(
      missionId,
      body.userId,
    );

    this.setStatus(201);

    return ApiResponse.success(
      201,
      "미션 도전 성공",
      result,
    );
  }

  @SuccessResponse(200, "진행중 미션 조회 성공")
  @Response(500, "서버 내부 오류")
  @Get("{userId}")
  public async getReceivedMissions(
    @Path() userId: number,
  ) {

    const result = await getReceivedMissionsService(userId);

    this.setStatus(200);

    return ApiResponse.success(
      200,
      "진행중 미션 조회 성공",
      result,
    );
  }

  @SuccessResponse(200, "미션 완료 처리 성공")
  @Response(500, "서버 내부 오류")
  @Patch("{userMissionId}")
  public async completeUserMission(
    @Path() userMissionId: number,
    @Body() body: any,
  ) {

    const result = await completeUserMissionService(
      userMissionId,
      body.userId,
    );

    this.setStatus(200);

    return ApiResponse.success(
      200,
      "미션 완료 처리 성공",
      result,
    );
  }
}