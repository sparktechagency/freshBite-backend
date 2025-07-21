"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRoutes = void 0;
const express_1 = require("express");
const recipe_controller_1 = require("./recipe.controller");
exports.recipeRoutes = (0, express_1.Router)();
exports.recipeRoutes.post("/create-recipe", recipe_controller_1.createRecipeController);
exports.recipeRoutes.get('/get-recipe', recipe_controller_1.getRecipeController);
exports.recipeRoutes.get("/get-recipe-by-id/:id", recipe_controller_1.getRecipeByIdController);
exports.recipeRoutes.patch('/delete-recipe', recipe_controller_1.deleteRecipeController);
exports.recipeRoutes.patch('/add-reviews/:id', recipe_controller_1.addRatingReviewsController);
exports.recipeRoutes.patch('/delete-reviews', recipe_controller_1.deleteReviewsController);
// recipeRoutes.patch('/update-rating-reviews', updateRatingReviewsController)
