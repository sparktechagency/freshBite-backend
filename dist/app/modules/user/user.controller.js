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
exports.addSaveRecipeController = exports.updateUserController = exports.getMyProfileController = exports.getAllUserController = exports.getSingleUserController = exports.createVipUserController = exports.createchildUserController = exports.createTrailUserController = void 0;
const user_model_1 = require("./user.model");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
const user_service_1 = require("./user.service");
exports.createTrailUserController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const genaratingToken = yield (0, user_service_1.trailUserServices)(req === null || req === void 0 ? void 0 : req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "user created successfully",
        token: genaratingToken,
    });
}));
exports.createchildUserController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield (0, user_service_1.childUserServices)(req);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "child user created successfully",
        data: createdUser
    });
}));
exports.createVipUserController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield (0, user_service_1.vipUserServices)(req);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "vip user created successfully",
        data: createdUser,
    });
}));
exports.getSingleUserController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.userModel.findOne({ email: req.query.email }).populate("parent_id , child_Accounts.userId").select("-password -isDeleted -role -createdAt -updatedAt");
    if (!user) {
        throw new Error("User not found");
    }
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "user retrive successfully",
        data: user
    });
}));
exports.getAllUserController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_service_1.getAllUserServices)(req);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "user retrive successfully",
        data: user
    });
}));
exports.getMyProfileController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_service_1.getMyProfileServices)(req);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "user retrive successfully",
        data: user
    });
}));
exports.updateUserController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield (0, user_service_1.updateUserServices)(req);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "user updated successfully",
        data: updatedUser
    });
}));
exports.addSaveRecipeController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const addingRecipe = yield (0, user_service_1.addSaveRecipeServices)(req);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "Recipe added to saved recipes successfully",
        data: addingRecipe
    });
}));
