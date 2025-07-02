import mongoose, { Schema } from "mongoose";
import { Tuser } from "./user.interface";

const userSchema = new Schema<Tuser>({
  name: {
    type: String,
    required: [true, "name is required"],
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
      values: ["user", "guest", "vip", "admin"],
      message: "{VALUE} is not a valid role",
    },
  },
  phone: {
    type: Number,
    required: [true, "number is required"],
    minlength: [5, "number minimum 5 characters"],
  },
  password: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

export const userModel = mongoose.model("users", userSchema);
