import mongoose, { Schema } from "mongoose";
import {
  Preparation,
  Tingredient,
  Tinstruction,
  TnutritionValue,
  Trating_reviews,
  Trecipe,
  TrequiredSkill,
} from "./recipe.interface";

// Define the Ingredient schema
export const ingredientSchema = new Schema<Tingredient>({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
  unit: { type: String, enum: { values: ['tbsp', 'tsp', 'can', 'large', 'small', 'medium', 'cup', 'kg', 'gm', 'mg'], message: "{VALUE} is not a valid unit" }, required: true }
});


// Define the NutritionValue schema
const nutritionValueSchema = new Schema<TnutritionValue>({
  nutrient: { type: String, required: true },
  amount: { type: String, required: true },
  unit: { type: String, enum: { values: ['gm', 'mg', 'kcal'], message: "{VALUE} is not a valid unit" }, required: true }
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
  description: { type: String, required: true, trim: true }
});


const instructionSchema = new Schema<Tinstruction>({
  description: { type: String, required: true },
  videoUrl: { type: String, required: true }
})


const ratingSchema = new Schema<Trating_reviews>({
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true }
});


const recipeSchema = new Schema<Trecipe>(
  {
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
    rating_reviews: { type: [ratingSchema], default:[], },
    tag: { type: [String], required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Recipemodel = mongoose.model<Trecipe>("recipes", recipeSchema);

export default Recipemodel;
