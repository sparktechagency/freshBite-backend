"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsRouter = void 0;
const express_1 = require("express");
const settings_controller_1 = require("./settings.controller");
const authentication_1 = require("../../middleware/authentication");
exports.settingsRouter = (0, express_1.Router)();
exports.settingsRouter.post("/create-setting", authentication_1.authentication, settings_controller_1.createSettingsController);
exports.settingsRouter.patch("/update-setting", authentication_1.authentication, settings_controller_1.updateSettingsController);
