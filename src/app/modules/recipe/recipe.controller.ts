import { NextFunction, Request, RequestHandler, Response } from "express";
import catchAsync from "../../lib/catchAsync";
import Recipemodel from "./recipe.model";
import status from "http-status";
import { addReviewRatingService, deleteReviewServices } from "./recipe.service";
import mongoose from "mongoose";




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


export const getRecipeByIdController: RequestHandler = catchAsync(async (req, res, next) => {
  const findRecipe = await Recipemodel.findById(req?.params?.id)
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "recipe retrive successfully",
    data: findRecipe
  });
})



export const addRatingReviewsController: RequestHandler = catchAsync(async (req, res, next) => {

  const addingRevies = await addReviewRatingService(req?.params?.id, req.body)
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "added successfully",
    data: addingRevies
  });

})

export const deleteReviewsController: RequestHandler = catchAsync(async (req, res, next) => {


  const deleting = await deleteReviewServices(req)

  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "reviews deleted successfully",
    data: deleting
  });

})

