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
exports.signInService = void 0;
const config_1 = require("../../config");
const user_model_1 = require("../user/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signInService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const checkExistancy = yield user_model_1.userModel.findOne({ email: payload.email });
    if (!checkExistancy) {
        throw new Error('user is not exist');
    }
    if (checkExistancy.password !== payload.password) {
        throw new Error('invalid password');
    }
    if (checkExistancy.isDeleted) {
        throw new Error('unthorized user');
    }
    const credentials = {
        full_name: checkExistancy.full_name,
        email: checkExistancy.email,
        role: checkExistancy.role,
    };
    const accessToken = jsonwebtoken_1.default.sign(credentials, config_1.envData.secret, { expiresIn: '7d' });
    return accessToken;
});
exports.signInService = signInService;
