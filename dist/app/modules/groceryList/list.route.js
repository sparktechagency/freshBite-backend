"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRoute = void 0;
const express_1 = require("express");
const list_controller_1 = require("./list.controller");
exports.listRoute = (0, express_1.Router)();
exports.listRoute.post('/create-list', list_controller_1.createListController);
exports.listRoute.get('/get-ingredient', list_controller_1.getIngredientFromMealPlan);
