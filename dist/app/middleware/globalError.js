"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalError = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = require("../config");
const GlobalError = (err, req, res, next) => {
    res.status(http_status_1.default.BAD_REQUEST).json({
        success: false,
        code: http_status_1.default.BAD_REQUEST,
        message: (err === null || err === void 0 ? void 0 : err.name) || 'something went wrong',
        errorSource: [{ err }],
        stack: config_1.envData.mode === "development" ? err.stack : undefined,
    });
};
exports.GlobalError = GlobalError;
