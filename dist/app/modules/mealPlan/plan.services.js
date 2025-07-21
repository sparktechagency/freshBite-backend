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
exports.updatePlanServices = exports.createMealPlanServices = void 0;
const plan_model_1 = require("./plan.model");
const createMealPlanServices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const checkBefore = yield plan_model_1.MealPlan.find({
        $and: [
            { title: payload === null || payload === void 0 ? void 0 : payload.title },
            { description: payload === null || payload === void 0 ? void 0 : payload.description },
            { meal_time: payload === null || payload === void 0 ? void 0 : payload.meal_time },
            { portion: payload === null || payload === void 0 ? void 0 : payload.portion }
        ]
    }).select('title');
    if (checkBefore.length) {
        throw new Error('this plan already exist');
    }
    const creatingPlan = yield plan_model_1.MealPlan.create(payload);
    return creatingPlan;
});
exports.createMealPlanServices = createMealPlanServices;
const updatePlanServices = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const updating = yield plan_model_1.MealPlan.findByIdAndUpdate((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.id, req.body, {
        new: true,
        runValidators: true,
        context: 'query'
    });
    if (!updating) {
        throw new Error('internal server error');
    }
    return updating;
});
exports.updatePlanServices = updatePlanServices;
