import { NextFunction, Request, RequestHandler, Response } from "express";
import catchAsync from "../../lib/catchAsync";
import Recipemodel from "./recipe.model";
import status from "http-status";
import { addReviewRatingService, deleteRecipeService, deleteReviewServices, getAllRecipeServices } from "./recipe.service";





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
  const getRecipeData = await getAllRecipeServices(req)
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "recipe retrive successfully",
    data: getRecipeData
  });
})


export const getRecipeByIdController: RequestHandler = catchAsync(async (req, res, next) => {
  const findRecipe = await Recipemodel.findById(req?.params?.id)
  if(!findRecipe){
    throw new Error("Recipe not found");
  }

  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "recipe retrive successfully",
    data: findRecipe
  });
})


export const deleteRecipeController: RequestHandler = catchAsync(async (req, res, next) => {
  const deleting = await deleteRecipeService(req?.query?.id as string)
  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "recipe deleted successfully",
    data: deleting
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


