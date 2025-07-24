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
exports.updateSettingsController = exports.createSettingsController = void 0;
const settings_model_1 = require("./settings.model");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../lib/catchAsync"));
exports.createSettingsController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user.role !== 'admin') {
        throw new Error("unauthorized to create settings");
    }
    const createdSettings = yield settings_model_1.SettingsModel.create(req.body);
    if (!createdSettings) {
        throw new Error("Failed to create settings");
    }
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "Settings created successfully",
        data: createdSettings
    });
}));
exports.updateSettingsController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (req.user.role !== 'admin') {
        throw new Error("unauthorized to update settings");
    }
    if (!((_a = req.query) === null || _a === void 0 ? void 0 : _a.title)) {
        throw new Error("Setting title is required for update");
    }
    const updateSettings = yield settings_model_1.SettingsModel.findOneAndUpdate({ setting_title: (_b = req.query) === null || _b === void 0 ? void 0 : _b.title }, { value: req.body.value }, { new: true, runValidators: true });
    if (!updateSettings) {
        throw new Error("Failed to update settings");
    }
    res.status(http_status_1.default.OK).json({
        success: true,
        code: http_status_1.default.OK,
        message: "Settings updated successfully",
        data: updateSettings
    });
}));
