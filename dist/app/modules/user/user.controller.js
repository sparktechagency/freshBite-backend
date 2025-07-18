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
exports.gertSingleUserController = exports.createUserController = void 0;
const user_model_1 = require("./user.model");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
exports.createUserController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const createUser = yield user_model_1.userModel.create(req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "user created successfully",
        data: {
            attributes: createUser,
        },
    });
}));
exports.gertSingleUserController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.userModel.findOne({ email: req.query.email });
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "user retrive successfully",
        data: {
            attributes: user,
        },
    });
}));
