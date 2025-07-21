import { Router } from "express";
import { addRatingReviewsController, createRecipeController, deleteRecipeController, deleteReviewsController, getRecipeByIdController, getRecipeController, } from "./recipe.controller";

export const recipeRoutes = Router();

recipeRoutes.post("/create-recipe", createRecipeController);
recipeRoutes.get('/get-recipe', getRecipeController)
recipeRoutes.get("/get-recipe-by-id/:id", getRecipeByIdController)
recipeRoutes.patch('/delete-recipe',deleteRecipeController)
recipeRoutes.patch('/add-reviews/:id', addRatingReviewsController)
recipeRoutes.patch('/delete-reviews', deleteReviewsController)
// recipeRoutes.patch('/update-rating-reviews', updateRatingReviewsController)