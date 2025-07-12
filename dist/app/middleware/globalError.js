"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalError = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = require("../config");
const GlobalError = (err, req, res, next) => {
    let statusCode = (err === null || err === void 0 ? void 0 : err.status) || 500;
    let message = (err === null || err === void 0 ? void 0 : err.message) || 'something went wrong';
    let errorSource = [{
            path: '',
            message: ''
        }];
    if ((err === null || err === void 0 ? void 0 : err.name) === 'ValidationError') {
        const placeErrorSource = Object.values(err === null || err === void 0 ? void 0 : err.errors).map((value) => {
            return {
                path: value === null || value === void 0 ? void 0 : value.path,
                message: value === null || value === void 0 ? void 0 : value.message
            };
        });
        statusCode = http_status_1.default.BAD_REQUEST;
        errorSource = placeErrorSource;
        message = 'validation error';
    }
    res.status(statusCode).json({
        success: false,
        code: statusCode,
        message: message,
        errorSource: errorSource,
        // mtEror:err,
        stack: config_1.envData.mode === "development" ? err.stack : undefined,
    });
};
exports.GlobalError = GlobalError;
