import { Request, Response, NextFunction } from "express";

import { CustomError } from "../errors/custom.error.js";
import { ApiResponse } from "../responses/api.response.js";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  if (err instanceof CustomError) {

    return res.status(err.status).json(
      ApiResponse.error(
        err.status,
        err.message,
        err.errorCode,
        err.data,
      ),
    );
  }

  console.error(err);

  return res.status(500).json(
    ApiResponse.error(
      500,
      "서버 내부 오류",
    ),
  );
};