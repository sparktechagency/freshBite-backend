import { NextFunction, Request, RequestHandler, Response } from "express";
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

  if (!req.params?.id) {
    throw new Error('recipe id is required')
  }

  const addingRevies = await Recipemodel.findByIdAndUpdate(req.params?.id,
    { $addToSet: { rating_reviews: req.body } },
    { new: true, runValidators: true })

  if (!addingRevies) {
    throw new Error('internal server error')
  }

  res.status(status.OK).json({
    success: true,
    code: status.OK,
    message: "added successfully",
    data: addingRevies
  });

})


// export const updateRatingReviewsController: RequestHandler = async (req, res, next) => {

//   //its not working bcz rating obj is aaray of object
//   const updating = await Recipemodel.findByIdAndUpdate(req?.query?.id, req.body, { new: true, runValidators: true })
//   res.status(status.OK).json({
//     success: true,
//     code: status.OK,
//     message: "added successfully",
//     data: updating
//   });
// }
