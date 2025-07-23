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
Object.defineProperty(exports, "__esModule", { value: true });
exports.parentAuth = void 0;
const user_model_1 = require("../modules/user/user.model");
const parentAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const checkexistancy = yield user_model_1.userModel.findOne({ email: (_a = req.body) === null || _a === void 0 ? void 0 : _a.email });
        if (checkexistancy) {
            throw new Error("this child user already exists");
        }
        if (!req.body.parent_id) {
            throw new Error('parent_id is required to create child account');
        }
        const findingParent = yield user_model_1.userModel.findById(req.body.parent_id);
        if ((findingParent === null || findingParent === void 0 ? void 0 : findingParent.role) !== "family") {
            throw new Error("You are not authorized to create a child user");
        }
        next();
    }
    catch (err) {
        next(err);
    }
});
exports.parentAuth = parentAuth;
