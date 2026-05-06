import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { UserSignUpRequest } from "../dtos/user.dto.js";
import { userSignUp } from "../services/user.service.js";

export const handleUserSignUp = async (req: Request, res: Response, next: NextFunction ) => {
  console.log("회원가입을 요청했습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용
 
// req.body를 UserSignUpRequest 타입으로 '강제' (Type Assertion) 해줍니다. 
try {
  const user = await userSignUp(req.body as UserSignUpRequest);
  res.status(StatusCodes.OK).json({ result: user });
} catch (err) {
  next(err);
}
};