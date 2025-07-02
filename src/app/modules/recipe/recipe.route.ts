import { Router } from "express";
import { createRecipeController, getRecipeController } from "./recipe.controller";

export const recipeRoutes = Router();

recipeRoutes.post("/create-recipe", createRecipeController);
recipeRoutes.get('/get-recipe',getRecipeController)
