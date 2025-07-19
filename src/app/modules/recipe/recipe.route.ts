import { Router } from "express";
import { addRatingReviewsController, createRecipeController, getRecipeByIdController, getRecipeController,} from "./recipe.controller";

export const recipeRoutes = Router();

recipeRoutes.post("/create-recipe", createRecipeController);
recipeRoutes.get('/get-recipe', getRecipeController)
recipeRoutes.get("/get-recipe-by-id/:id", getRecipeByIdController)
recipeRoutes.patch('/add-reviews/:id', addRatingReviewsController)
// recipeRoutes.patch('/update-rating-reviews', updateRatingReviewsController)