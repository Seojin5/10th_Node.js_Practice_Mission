export class CustomError extends Error {
  status: number;
  errorCode?: string;
  data?: unknown;

  constructor(
    status: number,
    message: string,
    errorCode?: string,
    data?: unknown,
  ) {
    super(message);

    this.status = status;
    this.errorCode = errorCode;
    this.data = data;
  }
}