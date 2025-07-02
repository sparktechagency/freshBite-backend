"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalError = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = require("../config");
const GlobalError = (err, req, res, next) => {
    res.status(http_status_1.default.UNAUTHORIZED).json({
        success: false,
        message: err.message,
        errorSource: {},
        stack: config_1.envData.mode === "development" ? err.stack : undefined,
    });
};
exports.GlobalError = GlobalError;
