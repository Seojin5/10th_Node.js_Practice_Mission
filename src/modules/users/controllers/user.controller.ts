import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { UserSignUpRequest } from "../dtos/user.dto.js";
import { userSignUp } from "../services/user.service.js";
import { ApiResponse } from "../../../utils/api.response.js";

export const handleUserSignUp = async (
  req: Request,
  res: Response
) => {
  try {
    console.log("회원가입을 요청했습니다!");
    console.log("body:", req.body);

    const user = await userSignUp(
      req.body as UserSignUpRequest
    );

    return res.status(StatusCodes.CREATED).json(
      ApiResponse.success(
        201,
        "회원가입 성공",
        user
      )
    );

  } catch (err: any) {
    return res.status(err.status || 500).json(
      ApiResponse.error(
        err.status || 500,
        "회원가입 실패"
      )
    );
  }
};