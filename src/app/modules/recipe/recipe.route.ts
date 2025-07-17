import { Router } from "express";
import { createRecipeController, getRecipeByIdController, getRecipeController } from "./recipe.controller";

export const recipeRoutes = Router();

recipeRoutes.post("/create-recipe", createRecipeController);
recipeRoutes.get('/get-recipe',getRecipeController)
recipeRoutes.get("/get-recipe-by-id/:id",getRecipeByIdController)