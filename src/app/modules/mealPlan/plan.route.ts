import { Router } from "express";
import { createMealPlanController, getMealPlanByEmailController, updatePlanController } from "./plan.controller";
import { authentication } from "../../middleware/authentication";

export const mealRouter = Router()

mealRouter.post('/create-plan', authentication, createMealPlanController)
mealRouter.get('/get-meal-plan', authentication, getMealPlanByEmailController)
mealRouter.patch('/update-plan', authentication, updatePlanController)