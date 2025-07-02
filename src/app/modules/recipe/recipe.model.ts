import mongoose, { Schema } from "mongoose";
import {
  Preparation,
  Tingredient,
  TnutritionValue,
  Trating,
  Trecipe,
  TrequiredSkill,
} from "./recipe.interface";

// Define the Ingredient schema
const ingredientSchema = new Schema<Tingredient>({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
});

// Define the NutritionValue schema
const nutritionValueSchema = new Schema<TnutritionValue>({
  value: { type: String, required: true },
  quantity: { type: String, required: true },
});

// Define the Preparation schema
const preparationSchema = new Schema<Preparation>({
  totalTime: { type: String, required: true },
  prepTime: { type: String, required: true },
  cookTime: { type: String, required: true },
});

const requiredSkillSchema = new Schema<TrequiredSkill>({
  title: { type: String, required: true, trim: true },
  videoUrl: { type: String, required: true, trim: true },
});

const ratingSchema = new Schema<Trating>({
  rating: { type: Number, required: true },
  review: { type: String, required: true },
});





const recipeSchema = new Schema<Trecipe>(
  {
    recipe_Name: {
      type: String,
      required: [true, "recipe name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "description is required"],
      trim: true,
    },
    imagesorVideos: { type: [String], required: [true, "image feild is required"] },
    portionSize: { type: Number, required: [true, "portion size is required"] },
    allergens: {
      type: [String],
      required: [true, "allergens is required"],
    },
    meal_type: {
      type: [String],
      required: [true, "meal type is required"],
    },
    recipe_components: {
      type: [String],
      required: [true, "recipe components is required"],
    },
    cooking_mode: {
      type: [String],
      required: [true, "cooking mode is required"],
    },
    
    flavor_profile: {
      type: [String],
      required: [true, "flavor profile is required"],
    },
    ingredients: {
      type: [ingredientSchema],
      required: [true, "ingredients is required"],
    },
    nutrition_value: {
      type: [nutritionValueSchema],
      required: [true, "nutration value is required"],
    },

    cuisine_type: {
      type: [String],
      required: [true, "cuisine type is required"],
    },
    season: {
      type: [String],
      required: [true, "season is required"],
    },
    diet_type: {
      type: [String],
      required: [true, "diet type is required"],
    },

    preparation: {
      type: preparationSchema,
      required: [true, "preparation is required"],
    },

    required_Skill: {
      type: [requiredSkillSchema],
      required: [true, "skill feild is required"],
    },

    instruction: {
      type: [String],
      required: [true, "instruction is required"],
    },

    rating: {
      type: [ratingSchema],
      required: [true, "text instruction is required"],
    },
    category: { type: String, required: true, trim: true },
    subCategory: { type: String, required: true, trim: true },
    tag: { type: [String], required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Recipemodel = mongoose.model<Trecipe>("recipes", recipeSchema);

export default Recipemodel;
