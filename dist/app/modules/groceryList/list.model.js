"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListModel = exports.listFeildSchema = void 0;
const mongoose_1 = require("mongoose");
const recipe_model_1 = require("../recipe/recipe.model");
exports.listFeildSchema = new mongoose_1.Schema({
    recipe_name: { type: String, required: [true, 'recipe name is required'], trim: true },
    ingredients: { type: [recipe_model_1.ingredientSchema], required: [true, 'this feild is required'], trim: true },
});
const listSchema = new mongoose_1.Schema({
    title: { type: String, required: [true, 'grocery list name is required'], trim: true },
    shopping_person: { type: String, required: [true, 'grocery list name is required'], trim: true },
    shopping_date: { type: String, required: [true, 'grocery list name is required'], trim: true },
    lists: { type: [exports.listFeildSchema], required: [true, 'grocery list feild is required'] }
});
exports.ListModel = (0, mongoose_1.model)('groceryList', listSchema);
