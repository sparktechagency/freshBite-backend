import { NextFunction, Request, RequestHandler, Response } from "express";
import { userModel } from "./user.model";
import status from "http-status";
import catchAsync from "../../lib/catchAsync";
import { addSaveRecipeServices, childUserServices, getAllUserServices, getMyProfileServices, trailUserServices, updateUserServices, vipUserServices } from "./user.service";
import { Tsaves } from "./user.interface";



export const createTrailUserController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const genaratingToken = await trailUserServices(req?.body)
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "user created successfully",
    token: genaratingToken,
  });
}
);



export const createchildUserController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const createdUser = await childUserServices(req)
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "child user created successfully",
    data: createdUser
  });
}
);


export const createVipUserController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {


  const createdUser = await vipUserServices(req)
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "vip user created successfully",
    data: createdUser,
  });
}
);



export const getSingleUserController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const user = await userModel.findOne({ email: req.query.email }).populate("parent_id , child_Accounts.userId").select("-password -isDeleted -role -createdAt -updatedAt");
  if (!user) {
    throw new Error("User not found");
  }
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "user retrive successfully",
    data: user
  });
}
);



export const getAllUserController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const user = await getAllUserServices(req);
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "user retrive successfully",
    data: user
  });
}
);




export const getMyProfileController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const user = await getMyProfileServices(req);
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "user retrive successfully",
    data: user
  });
}
);




export const updateUserController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

  const updatedUser = await updateUserServices(req);
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "user updated successfully",
    data: updatedUser
  });
}

)

export const addSaveRecipeController: RequestHandler = catchAsync(async (req, res, next) => {
  const addingRecipe = await addSaveRecipeServices(req);

  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "Recipe added to saved recipes successfully",
    data: addingRecipe
  });
});

