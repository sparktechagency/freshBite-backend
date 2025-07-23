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
exports.deleteReviewServices = exports.addReviewRatingService = exports.getAllRecipeServices = exports.deleteRecipeService = void 0;
const recipe_model_1 = __importDefault(require("./recipe.model"));
const deleteRecipeService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleting = yield recipe_model_1.default.findByIdAndUpdate(id, { isDeleted: true }, { new: true, runValidators: true });
    if (!deleting) {
        throw new Error('internal server Error');
    }
    return deleting;
});
exports.deleteRecipeService = deleteRecipeService;
const getAllRecipeServices = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const limit = ((_a = req.query) === null || _a === void 0 ? void 0 : _a.limit) ? parseInt((_b = req.query) === null || _b === void 0 ? void 0 : _b.limit) : 2;
    const page = ((_c = req.query) === null || _c === void 0 ? void 0 : _c.page) ? parseInt((_d = req.query) === null || _d === void 0 ? void 0 : _d.page) : 1;
    const skip = (page - 1) * limit;
    const getRecipeData = yield recipe_model_1.default.find({ isDeleted: { $eq: false } })
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .select('recipe_Name')
        .lean();
    if (!getRecipeData) {
        throw new Error('internal server error');
    }
    return getRecipeData;
});
exports.getAllRecipeServices = getAllRecipeServices;
const addReviewRatingService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = Object.assign(Object.assign({}, payload), { id: Math.random().toString().split('.')[1] });
    const checkBefore = yield recipe_model_1.default.find({
        $and: [
            { 'rating_reviews.rating': payload === null || payload === void 0 ? void 0 : payload.rating },
            { 'rating_reviews.review': payload === null || payload === void 0 ? void 0 : payload.review }
        ]
    });
    if (checkBefore.length > 0) {
        throw new Error('you have already reviewed');
    }
    const addingReviews = yield recipe_model_1.default.findByIdAndUpdate(id, { $addToSet: { rating_reviews: data } }, { new: true, runValidators: true });
    if (!addingReviews) {
        throw new Error('internal server error');
    }
    return addingReviews;
});
exports.addReviewRatingService = addReviewRatingService;
const deleteReviewServices = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const updating = yield recipe_model_1.default.findByIdAndUpdate((_a = req.query) === null || _a === void 0 ? void 0 : _a.recipe_id, { $pull: { rating_reviews: { id: Number((_b = req.body) === null || _b === void 0 ? void 0 : _b.id) } } }, { new: true });
    if (!updating) {
        throw new Error('internal server Error');
    }
    return updating;
});
exports.deleteReviewServices = deleteReviewServices;
