import e, { RequestHandler } from "express";
import userRecipemodel from "./userRecipe.model";
import status from "http-status";
import catchAsync from "../../lib/catchAsync";
import { deleteUserRecipeService, getUserRecipeService } from "./userRecipe.services";



export const createUserRecipeController: RequestHandler = catchAsync(async (req, res, next) => {
 if (!req.user?.email) {
        throw new Error("unauthorized user");
    }
    req.body.email = req.user.email;
    const createrecipe = await userRecipemodel.create(req.body);
    res.status(status.OK).json({
        success: true,
        code: status.OK,
        message: "recipe created successfully",
        response: createrecipe
    });
})

export const getUserRecipeController: RequestHandler = catchAsync(async (req, res, next) => {

    const recipes = await getUserRecipeService(req);
    res.status(status.OK).json({
        success: true,
        code: status.OK,
        message: "Recipes retrieved successfully",
        response: recipes
    });
});


export const deleteUserRecipeController: RequestHandler = catchAsync(async (req, res, next) => {
   
    const deleted = await deleteUserRecipeService(req);
    res.status(status.OK).json({
        success: true,
        code: status.OK,
        message: "Recipe deleted successfully",
        response: deleted
    });
});