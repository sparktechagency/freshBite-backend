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
exports.updateUserServices = exports.getAllUserServices = exports.vipUserServices = exports.childUserServices = exports.trailUserServices = void 0;
const user_model_1 = require("./user.model");
const config_1 = require("../../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const trailUserServices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield user_model_1.userModel.findOne({ email: payload.email });
    if (existingUser) {
        throw new Error('User already exists');
    }
    payload.role = 'trail';
    payload.child_Accounts = [];
    const creatingTrailUser = yield user_model_1.userModel.create(payload);
    if (!creatingTrailUser) {
        throw new Error('something went wrong');
    }
    const accessToken = jsonwebtoken_1.default.sign({
        full_name: creatingTrailUser.full_name,
        email: creatingTrailUser.email,
        role: creatingTrailUser.role,
    }, config_1.envData.secret, { expiresIn: '7d' });
    return accessToken;
});
exports.trailUserServices = trailUserServices;
const childUserServices = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if ((req === null || req === void 0 ? void 0 : req.user.role) !== 'family') {
        throw new Error('Unauthorized access');
    }
    const checkexistancy = yield user_model_1.userModel.findOne({ email: (_a = req.body) === null || _a === void 0 ? void 0 : _a.email });
    if (checkexistancy) {
        throw new Error("this child user already exists");
    }
    req.body.role = 'children';
    req.body.full_name = 'child  account';
    req.body.phone = 0;
    const creatingChildUser = yield user_model_1.userModel.create(req.body);
    if (!creatingChildUser) {
        throw new Error('something went wrong');
    }
    const pushingChildAccountInparent = yield user_model_1.userModel.findByIdAndUpdate((_b = req.body) === null || _b === void 0 ? void 0 : _b.parent_id, { $addToSet: { child_Accounts: { name: 'child account', userId: creatingChildUser._id } } }, {
        new: true,
        runValidators: true,
        context: 'query'
    });
    if (!pushingChildAccountInparent) {
        throw new Error('something went wrong while create child account');
    }
    return creatingChildUser;
});
exports.childUserServices = childUserServices;
const vipUserServices = (req) => __awaiter(void 0, void 0, void 0, function* () {
    if ((req === null || req === void 0 ? void 0 : req.user.role) !== 'admin') {
        throw new Error('Unauthorized access ');
    }
    const existingUser = yield user_model_1.userModel.findOne({ email: req === null || req === void 0 ? void 0 : req.body.email });
    if (existingUser) {
        throw new Error('User already exists');
    }
    req.body.role = 'vip';
    //req.body.child_Accounts = [];
    const creatingVipUser = yield user_model_1.userModel.create(req === null || req === void 0 ? void 0 : req.body);
    if (!creatingVipUser) {
        throw new Error('something went wrong');
    }
    return creatingVipUser;
});
exports.vipUserServices = vipUserServices;
const getAllUserServices = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const limit = ((_a = req.query) === null || _a === void 0 ? void 0 : _a.limit) ? parseInt((_b = req.query) === null || _b === void 0 ? void 0 : _b.limit) : 2;
    const page = ((_c = req.query) === null || _c === void 0 ? void 0 : _c.page) ? parseInt((_d = req.query) === null || _d === void 0 ? void 0 : _d.page) : 1;
    const skip = (page - 1) * limit;
    // or even skip logic
    // const skips = (limit*page)-limit
    if (req.user.role !== 'admin') {
        throw new Error("Unauthorized access");
    }
    const user = yield user_model_1.userModel.find({ isDeleted: { $eq: false } })
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .select("-password -isDeleted -createdAt -updatedAt -save_recipes -address")
        .lean();
    if (!user) {
        throw new Error("Users not found");
    }
    return user;
});
exports.getAllUserServices = getAllUserServices;
const updateUserServices = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const updating = yield user_model_1.userModel.findOneAndUpdate({ email: req.user.email }, req.body, {
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
