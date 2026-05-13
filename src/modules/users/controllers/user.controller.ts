import { Body, Controller, Post, Route, Tags, SuccessResponse, Response } from "tsoa";
import { StatusCodes } from "http-status-codes";

import { UserSignUpRequest } from "../dtos/user.request.dto.js";
import { userSignUp } from "../services/user.service.js";

import { ApiResponse } from "../../../utils/api.response.js";
import { CustomError } from "../../../errors/custom.error.js";

@Route("users")
@Tags("Users")
export class UserController extends Controller {

  @SuccessResponse(StatusCodes.CREATED, "회원가입 성공")
  @Response(500, "서버 내부 오류")
  @Post("signup")
  
  public async handleUserSignUp(
    @Body() body: UserSignUpRequest
  ) {
    try {
      console.log("회원가입을 요청했습니다!");
      console.log("body:", body);

      const user = await userSignUp(body);

      this.setStatus(StatusCodes.CREATED);

      return ApiResponse.success(
          201,
          "회원가입 성공",
          user
      );

    } catch (err) {

      if (err instanceof CustomError) {
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