"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIngredientServices = void 0;
const plan_model_1 = require("../mealPlan/plan.model");
const getIngredientServices = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let allPlanRecipes = [];
    try {
        const findingByEmail = yield plan_model_1.MealPlan.find({ userEmail: email }).populate("recipes.recipe_id").select('-dates -isDelated -description -createdAt -updatedAt');
        const getEcachFeildRecipes = findingByEmail.map((value) => value === null || value === void 0 ? void 0 : value.recipes);
        getEcachFeildRecipes.forEach((value) => allPlanRecipes.push(...value));
        const finalIngredientListFromMealPlan = allPlanRecipes.map((value) => {
            var _a, _b;
            return {
                name: (_a = value === null || value === void 0 ? void 0 : value.recipe_id) === null || _a === void 0 ? void 0 : _a.recipe_Name,
                ingredients: (_b = value === null || value === void 0 ? void 0 : value.recipe_id) === null || _b === void 0 ? void 0 : _b.ingredients
            };
        });
        return finalIngredientListFromMealPlan;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.getIngredientServices = getIngredientServices;
