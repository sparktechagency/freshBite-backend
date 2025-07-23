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
exports.deleteUserRecipeService = exports.getUserRecipeService = void 0;
const userRecipe_model_1 = __importDefault(require("./userRecipe.model"));
const getUserRecipeService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const recipes = yield userRecipe_model_1.default.find({
        $and: [
            { email: req.user.email },
            { isDeleted: false }
        ]
    });
    if (!recipes || recipes.length === 0) {
        throw new Error("No recipes found for this user");
    }
    return recipes;
});
exports.getUserRecipeService = getUserRecipeService;
const deleteUserRecipeService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (!id) {
        throw new Error("Recipe ID is required for deletion");
    }
    const deleted = yield userRecipe_model_1.default.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    if (!deleted) {
        throw new Error('something went wrong while deleting the recipe');
    }
    return deleted;
});
exports.deleteUserRecipeService = deleteUserRecipeService;
