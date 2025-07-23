import { NextFunction, Request, Response } from "express";
import { signInService } from "./signin.service";
import status from "http-status";
import catchAsync from "../../lib/catchAsync";

export const SignIncontroller = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const sign = await signInService(req.body)
    res.status(status.OK).json({
        success: true,
        code: status.OK,
        message: "sign in successfully",
        token: sign
    });
})