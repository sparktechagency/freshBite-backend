import mongoose, { Schema } from "mongoose";
import { Tuser } from "./user.interface";



const userSchema = new Schema<Tuser>({

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

  password: { type: String, required: true, minlength:[6, 'password minimum 6 character'], maxlength:[30, 'password is too long'] },
  isDeleted: { type: Boolean, default: false },
},{timestamps:true})

export const userModel = mongoose.model("users", userSchema);
