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
exports.authentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../modules/user/user.model");
const config_1 = require("../config");
const authentication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            throw new Error('unauthorized user');
        }
        const decodeUser = jsonwebtoken_1.default.verify(token, config_1.envData.secret);
        if (!decodeUser) {
            throw new Error('unauthorized user');
        }
        const findUser = yield user_model_1.userModel.findOne({ email: decodeUser.email });
        if (!findUser) {
            throw new Error('unauthorized user');
        }
        req.user = decodeUser;
        next();
    }
    catch (err) {
        next(err);
    }
});
exports.authentication = authentication;
