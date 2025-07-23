"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInRoute = void 0;
const express_1 = require("express");
const sign_controller_1 = require("./sign.controller");
exports.signInRoute = (0, express_1.Router)();
exports.signInRoute.post('/sign-in', sign_controller_1.SignIncontroller);
