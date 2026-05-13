import { CustomError } from "../errors/custom.error.js";

export const validateRequired = (
  value: unknown,
  message: string,
) => {
  if (value == null || value === "") {
    throw new CustomError(
      400,
      message,
      "VALIDATION_ERROR",
    );
  }
};