"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Define the Ingredient schema
const ingredientSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    quantity: { type: String, required: true },
    unit: { type: String, enum: { values: ['tbsp', 'tsp', 'can', 'large', 'small', 'medium', 'cup', 'kg', 'gm', 'mg'], message: "{VALUE} is not a valid unit" }, required: true }
});
// Define the NutritionValue schema
const nutritionValueSchema = new mongoose_1.Schema({
    nutrient: { type: String, required: true },
    amount: { type: String, required: true },
    unit: { type: String, enum: { values: ['gm', 'mg', 'kcal'], message: "{VALUE} is not a valid unit" }, required: true }
});
// Define the Preparation schema
const preparationSchema = new mongoose_1.Schema({
    totalTime: { type: String, required: true },
    prepTime: { type: String, required: true },
    cookTime: { type: String, required: true },
});
const requiredSkillSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    videoUrl: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true }
});
const instructionSchema = new mongoose_1.Schema({
    description: { type: String, required: true },
    videoUrl: { type: String, required: true }
});
const ratingSchema = new mongoose_1.Schema({
    rating: { type: Number, required: true },
    review: { type: String, required: true },
});
const recipeSchema = new mongoose_1.Schema({
    recipe_Name: { type: String, required: [true, "recipe name is required"], trim: true, },
    description: { type: String, required: [true, "description is required"], trim: true },
    coverImage: { type: String, required: [true, "cover image is required"] },
    images: { type: [String], required: [true, "please add minimum 1 photo"] },
    portionSize: { type: Number, required: [true, "portion size is required"] },
    allergens: { type: [String], required: [true, "allergens is required"] },
    recipe_components: { type: [String], required: [true, "recipe components is required"] },
    cooking_mode: { type: [String], required: [true, "cooking mode is required"], },
    ingredients: { type: [ingredientSchema], required: [true, "ingredients is required"] },
    nutrition_value: { type: [nutritionValueSchema], required: [true, "nutration value is required"], },
    preparation: { type: preparationSchema, required: [true, "preparation is required"], },
    required_Skill: { type: [requiredSkillSchema], required: [true, "skill feild is required"], },
    instruction: { type: [instructionSchema], required: [true, "instruction is required"], },
    rating: { type: [ratingSchema], required: [true, "text instruction is required"], },
    tag: { type: [String], required: true },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });
const Recipemodel = mongoose_1.default.model("recipes", recipeSchema);
exports.default = Recipemodel;
