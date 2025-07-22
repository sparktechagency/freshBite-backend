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
exports.updateUserServices = exports.childUserServices = exports.trailUserServices = void 0;
const user_model_1 = require("./user.model");
const trailUserServices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.role = 'trail';
    const creatingTrailUser = yield user_model_1.userModel.create(payload);
    if (!creatingTrailUser) {
        throw new Error('something went wrong');
    }
    return creatingTrailUser;
});
exports.trailUserServices = trailUserServices;
const childUserServices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload.parent_id) {
        throw new Error('parent_id is required for child user');
    }
    payload.role = 'children';
    payload.full_name = 'child  account';
    payload.phone = 0;
    const creatingChildUser = yield user_model_1.userModel.create(payload);
    if (!creatingChildUser) {
        throw new Error('something went wrong');
    }
    return creatingChildUser;
});
exports.childUserServices = childUserServices;
const updateUserServices = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updating = yield user_model_1.userModel.findByIdAndUpdate(userId, payload, {
        new: true,
        runValidators: true,
        context: 'query'
    });
    if (!updating) {
        throw new Error('User not found');
    }
    return updating;
});
exports.updateUserServices = updateUserServices;
