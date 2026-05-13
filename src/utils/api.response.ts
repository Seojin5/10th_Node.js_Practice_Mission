export class ApiResponse<T> {
  success: boolean;
  code: number;
  message: string;
  data?: T;

  constructor(
    success: boolean,
    code: number,
    message: string,
    data?: T
  ) {
    this.success = success;
    this.code = code;
    this.message = message;
    this.data = data;
  }

  static success<T>(
    code: number,
    message: string,
    data?: T
  ) {
    return new ApiResponse(true, code, message, data);
  }

  static error(
    code: number,
    message: string
  ) {
    return new ApiResponse(false, code, message);
  }
}