"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const list_route_1 = require("./../modules/groceryList/list.route");
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const recipe_route_1 = require("../modules/recipe/recipe.route");
const plan_route_1 = require("../modules/mealPlan/plan.route");
exports.router = (0, express_1.Router)();
exports.router.use('/user', user_route_1.userRouter);
exports.router.use('/recipe', recipe_route_1.recipeRoutes);
exports.router.use('/meal', plan_route_1.mealRouter);
exports.router.use('/list', list_route_1.listRoute);
