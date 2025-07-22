"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/create-trail-user', user_controller_1.createTrailUserController);
exports.userRouter.post('/create-child-user', user_controller_1.createchildUserController);
exports.userRouter.patch('/update-user/:userId', user_controller_1.updateUserController);
// userRouter.get('/get-single-user',authentication, getSingleUserController)
