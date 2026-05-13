import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { UserSignUpRequest } from "../dtos/user.dto.js";
import { userSignUp } from "../services/user.service.js";
import { ApiResponse } from "../../../utils/api.response.js";
import { CustomError } from "../../../errors/custom.error.js";

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