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
exports.deleteReviewsController = exports.addRatingReviewsController = exports.deleteRecipeController = exports.getRecipeByIdController = exports.getRecipeController = exports.createRecipeController = void 0;
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
const recipe_model_1 = __importDefault(require("./recipe.model"));
const http_status_1 = __importDefault(require("http-status"));
const recipe_service_1 = require("./recipe.service");
exports.createRecipeController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const createrecipe = yield recipe_model_1.default.create(req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "recipe created successfully",
        response: createrecipe
    });
}));
exports.getRecipeController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const getRecipeData = yield recipe_model_1.default.find().select('recipe_Name coverImage').sort('-createdAt');
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "recipe retrive successfully",
        data: getRecipeData
    });
}));
exports.getRecipeByIdController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const findRecipe = yield recipe_model_1.default.findById((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "recipe retrive successfully",
        data: findRecipe
    });
}));
exports.deleteRecipeController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const deleting = yield (0, recipe_service_1.deleteRecipeService)((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.id);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "recipe deleted successfully",
        data: deleting
    });
}));
exports.addRatingReviewsController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const addingRevies = yield (0, recipe_service_1.addReviewRatingService)((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id, req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "added successfully",
        data: addingRevies
    });
}));
exports.deleteReviewsController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const deleting = yield (0, recipe_service_1.deleteReviewServices)(req);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "reviews deleted successfully",
        data: deleting
    });
}));
