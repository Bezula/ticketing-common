import { NextFunction, Request, RequestParamHandler, Response } from "express";
import { DatabaseConnectionValidationError } from "../errors/database-connection-validation-error";
import { RequestValidationError } from "../errors/request-validation-error";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors(),
    });
  }

  res.status(400).send({
    errors: [
      {
        message: "Something went wrong",
      },
    ],
  });
};
