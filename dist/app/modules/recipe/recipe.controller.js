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
exports.getRecipeController = exports.createRecipeController = void 0;
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
const recipe_model_1 = __importDefault(require("./recipe.model"));
const http_status_1 = __importDefault(require("http-status"));
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
    const getRecipeData = yield recipe_model_1.default.find();
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "recipe retrive successfully",
        data: {
            attributes: getRecipeData,
        },
    });
}));
