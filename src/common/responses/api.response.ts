export class ApiResponse<T> {
  success: boolean;
  code: number;
  message: string;
  data?: T;
  errorCode?: string;

  constructor(
    success: boolean,
    code: number,
    message: string,
    data?: T,
    errorCode?: string,
  ) {
    this.success = success;
    this.code = code;
    this.message = message;
    this.data = data;
    this.errorCode = errorCode;
  }

  static success<T>(
    code: number,
    message: string,
    data?: T,
  ) {
    return new ApiResponse(
      true,
      code,
      message,
      data,
    );
  }

  static error(
    code: number,
    message: string,
    errorCode?: string,
    data?: unknown,
  ) {
    return new ApiResponse(
      false,
      code,
      message,
      data,
      errorCode,
    );
  }
}