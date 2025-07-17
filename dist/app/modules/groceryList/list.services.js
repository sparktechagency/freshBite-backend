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
function getSpecialDate(dates) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toLocaleDateString();
    if (dates.includes(todayStr)) {
        // console.log(todayStr)
        return todayStr;
    }
    const minDate = new Date(Math.min(...dates.map(dateStr => new Date(dateStr).getTime())));
    minDate.setDate(minDate.getDate() - 1);
    return minDate.toLocaleDateString();
}
const getIngredientServices = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let allPlanRecipes = [];
    try {
        const findingByEmail = yield plan_model_1.MealPlan.find({ userEmail: email }).populate("recipes.recipe_id").select('dates recipes');
        findingByEmail.map((value) => {
            var _a;
            const date = getSpecialDate(value === null || value === void 0 ? void 0 : value.dates);
            const finalIngredientListFromMealPlan = (_a = value === null || value === void 0 ? void 0 : value.recipes) === null || _a === void 0 ? void 0 : _a.map((value, index) => {
                var _a, _b;
                return {
                    name: (_a = value === null || value === void 0 ? void 0 : value.recipe_id) === null || _a === void 0 ? void 0 : _a.recipe_Name,
                    shopping_date: date,
                    ingredients: (_b = value === null || value === void 0 ? void 0 : value.recipe_id) === null || _b === void 0 ? void 0 : _b.ingredients
                };
            });
            allPlanRecipes.push(...finalIngredientListFromMealPlan);
        });
        return allPlanRecipes;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.getIngredientServices = getIngredientServices;
