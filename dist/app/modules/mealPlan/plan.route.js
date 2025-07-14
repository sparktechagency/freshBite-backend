"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealRouter = void 0;
const express_1 = require("express");
const plan_controller_1 = require("./plan.controller");
exports.mealRouter = (0, express_1.Router)();
exports.mealRouter.post('/create-plan', plan_controller_1.createMealPlanController);
exports.mealRouter.get('/get-meal-plan', plan_controller_1.getMealPlanByEmailController);
exports.mealRouter.patch('/update-plan', plan_controller_1.updatePlanController);
