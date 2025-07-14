import { Router } from "express";
import { createMealPlanController, getMealPlanByEmailController, updatePlanController } from "./plan.controller";

export const mealRouter = Router()

mealRouter.post('/create-plan', createMealPlanController)
mealRouter.get('/get-meal-plan', getMealPlanByEmailController)
mealRouter.patch('/update-plan', updatePlanController)