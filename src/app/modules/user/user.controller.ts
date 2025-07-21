import { NextFunction, Request, Response } from "express";
import { userModel } from "./user.model";
import status from "http-status";
import catchAsync from "../../lib/catchAsync";
import { trailUserServices } from "./user.service";





export const createTrailUserController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

const creating = await trailUserServices(req?.body)
  res.status(status.OK).json({
      success: true,
      code: status.OK,
      message: "user created successfully",
      data: {
        attributes: creating,
      },
    });
}
);






export const getSingleUserController = catchAsync(
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
