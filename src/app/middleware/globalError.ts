import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { envData } from "../config";

export const GlobalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(status.BAD_REQUEST).json({
    success: false,
    code : status.BAD_REQUEST,
    message: err?.name || 'something went wrong',
    errorSource: [{err}],
    stack: envData.mode === "development" ? err.stack : undefined,
  });
};
