"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const authentication_1 = require("../../middleware/authentication");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/create-user', user_controller_1.createUserController);
exports.userRouter.get('/get-single-user', authentication_1.authentication, user_controller_1.gertSingleUserController);
