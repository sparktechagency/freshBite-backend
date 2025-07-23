import { de } from 'zod/dist/types/v4/locales';
import mongoose, { Schema } from "mongoose";
import { TchildAccount, Tsaves, TUser } from "./user.interface";




const saveSchema = new Schema<Tsaves>({
  recipe_name: { type: String, trim: true, required: [true, 'recipe_name is required'] },
  recipe_id: { type: Schema.Types.ObjectId, ref: 'recipes', required: true }

})
const childAccountSchema = new Schema<TchildAccount>({
  name: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'users', required: true }
});






const UserSchema = new Schema<TUser>({
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
  parent_id: { type: Schema.Types.ObjectId, ref: 'users' },
  child_Accounts: { type: [childAccountSchema],required: false},
  phone: {
    type: Number,
    required: [true, 'phone number is required'],
    minlength: [5, "number minimum 5 characters"],
  },

  address: { type: String, maxlength: [100, 'address must be describe within 100 character'], default: '' },
  save_recipes: { type: [saveSchema], default: [] },
  isDeleted: { type: Boolean, default: false },
}, { timestamps: true });

export const userModel = mongoose.model("users", UserSchema);
