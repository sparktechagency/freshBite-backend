import { NextFunction, Request, Response } from "express";
import status from "http-status";

export const notFound = (req:Request, res:Response, next:NextFunction) => {
    res.status(status.NOT_FOUND).json({
      success: false,
      message: 'route not found',
    });
}