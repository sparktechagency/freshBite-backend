import { NextFunction, Request, Response } from "express";
import { userModel } from "./user.model";
import status from "http-status";
import catchAsync from "../../lib/catchAsync";




export const createUserController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
     
    const createUser = await userModel.create(req.body);
    res.status(status.OK).json({
      success: true,
      code: status.OK,
      message: "user created successfully",
      data: {
        attributes: createUser,
      },
    });
  }
);


export const gertSingleUserController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await userModel.findOne({ email: req.query.email });
    res.status(status.OK).json({
      success: true,
      code: status.OK,
      message: "user retrive successfully",
      data: {
        attributes: user,
      },
    });
  }
);
