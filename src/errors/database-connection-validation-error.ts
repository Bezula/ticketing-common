import { CustomError } from "./custom-error";

export class DatabaseConnectionValidationError extends CustomError {
  reason = "Error connecting to database";
  statusCode = 500 as const;

  constructor() {
    super("Error connecting to database");

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionValidationError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
