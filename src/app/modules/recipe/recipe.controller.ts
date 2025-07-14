import { NextFunction, Request, Response } from "express";
import catchAsync from "../../lib/catchAsync";
import Recipemodel from "./recipe.model";
import status from "http-status";



export const createRecipeController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const createrecipe = await Recipemodel.create(req.body);
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "recipe created successfully",
    response: createrecipe
  });
}
);


export const getRecipeController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const getRecipeData = await Recipemodel.find().select('recipe_Name coverImage').sort('-createdAt')
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "recipe retrive successfully",
    data: getRecipeData
  });
})
