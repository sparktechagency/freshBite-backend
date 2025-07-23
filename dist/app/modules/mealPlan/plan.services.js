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
const createMealPlanServices = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const checkBefore = yield plan_model_1.MealPlan.find({
        $and: [
            { title: (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.title },
            { description: (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.description },
            { meal_time: (_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.meal_time },
            { portion: (_d = req === null || req === void 0 ? void 0 : req.body) === null || _d === void 0 ? void 0 : _d.portion }
        ]
    }).select('title');
    if (checkBefore.length) {
        throw new Error('this plan already exist');
    }
    const creatingPlan = yield plan_model_1.MealPlan.create(Object.assign(Object.assign({}, req.body), { userEmail: (_e = req === null || req === void 0 ? void 0 : req.user) === null || _e === void 0 ? void 0 : _e.email }));
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
        throw new Error('meal plan not found');
    }
    return updating;
});
exports.updatePlanServices = updatePlanServices;
