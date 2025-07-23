import { Router } from "express";
import { createUserRecipeController, deleteUserRecipeController, getUserRecipeController } from "./userRecipe.controller";
import { authentication } from "../../middleware/authentication";


export const userRecipeRoute = Router()

userRecipeRoute.post('/create-recipe', authentication, createUserRecipeController)
userRecipeRoute.get('/get-recipes', authentication, getUserRecipeController);
userRecipeRoute.patch('/delete-recipes', authentication,deleteUserRecipeController);