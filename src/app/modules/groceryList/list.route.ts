import { Router } from "express";
import { createListController, getIngredientFromMealPlan } from "./list.controller";

export const listRoute = Router()

listRoute.post('/create-list',createListController)
listRoute.get('/get-ingredient',getIngredientFromMealPlan)