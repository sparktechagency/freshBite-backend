"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRoutes = void 0;
const express_1 = require("express");
const recipe_controller_1 = require("./recipe.controller");
exports.recipeRoutes = (0, express_1.Router)();
exports.recipeRoutes.post("/create-recipe", recipe_controller_1.createRecipeController);
exports.recipeRoutes.get('/get-recipe', recipe_controller_1.getRecipeController);
