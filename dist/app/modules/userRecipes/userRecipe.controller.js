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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserRecipeController = exports.getUserRecipeController = exports.createUserRecipeController = void 0;
const userRecipe_model_1 = __importDefault(require("./userRecipe.model"));
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
const userRecipe_services_1 = require("./userRecipe.services");
exports.createUserRecipeController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!((_a = req.user) === null || _a === void 0 ? void 0 : _a.email)) {
        throw new Error("unauthorized user");
    }
    req.body.email = req.user.email;
    const createrecipe = yield userRecipe_model_1.default.create(req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "recipe created successfully",
        response: createrecipe
    });
}));
exports.getUserRecipeController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const recipes = yield (0, userRecipe_services_1.getUserRecipeService)(req);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "Recipes retrieved successfully",
        response: recipes
    });
}));
exports.deleteUserRecipeController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield (0, userRecipe_services_1.deleteUserRecipeService)(req);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "Recipe deleted successfully",
        response: deleted
    });
}));
