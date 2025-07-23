"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const saveSchema = new mongoose_1.Schema({
    recipe_name: { type: String, trim: true, required: [true, 'recipe_name is required'] },
    recipe_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'recipes', required: true }
});
const childAccountSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'users', required: true }
});
const UserSchema = new mongoose_1.Schema({
    full_name: {
        type: String,
        required: [true, 'full name is required'],
        maxlength: [100, "name length have to within 100 charactrs"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address",
        ],
        unique: true,
    },
    role: {
        type: String,
        required: [true, "role is required"],
        enum: {
            values: ["trail", "vip", "admin", "single", "family", "children"],
            message: "{VALUE} is not a valid role",
        },
    },
    password: {
        type: String,
        required: [true, "role is required"],
        minlength: [6, 'password minimum 6 character'],
        maxlength: [30, 'password is too long']
    },
    parent_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'users' },
    child_Accounts: { type: [childAccountSchema], required: false },
    phone: {
        type: Number,
        required: [true, 'phone number is required'],
        minlength: [5, "number minimum 5 characters"],
    },
    address: { type: String, maxlength: [100, 'address must be describe within 100 character'], default: '' },
    save_recipes: { type: [saveSchema], default: [] },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });
exports.userModel = mongoose_1.default.model("users", UserSchema);
