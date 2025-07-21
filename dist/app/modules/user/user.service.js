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
exports.trailUserServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("./user.model");
const trail_model_1 = require("../role/trail/trail.model");
const trailUserServices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const session = yield mongoose_1.default.startSession();
    const userData = {
        email: payload === null || payload === void 0 ? void 0 : payload.email,
        password: payload === null || payload === void 0 ? void 0 : payload.password,
        role: "trail",
        isDeleted: false
    };
    try {
        session.startTransaction();
        const creatingUser = yield user_model_1.userModel.create([userData], { session });
        if (!creatingUser.length) {
            throw new Error('something went wrong');
        }
        payload.user_id = (_a = creatingUser[0]) === null || _a === void 0 ? void 0 : _a._id;
        const creatingTrailUser = yield trail_model_1.trailUserModel.create([payload], { session });
        if (!(creatingTrailUser === null || creatingTrailUser === void 0 ? void 0 : creatingTrailUser.length)) {
            throw new Error('something went wrong');
        }
        yield session.commitTransaction();
        yield session.endSession();
        return creatingTrailUser;
    }
    catch (err) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(err);
    }
});
exports.trailUserServices = trailUserServices;
