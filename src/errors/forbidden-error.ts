import { CustomError } from "./custom-error";

export class ForbiddenError extends CustomError {
  statusCode: number = 403;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serializeErrors(): { message: string; field?: string }[] {
    return [
      {
        message: this.message,
      },
    ];
  }
}
