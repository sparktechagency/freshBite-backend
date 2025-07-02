import mongoose, { Schema } from "mongoose";
import { TsignInUser } from "./sign.interface";

const signInSchema = new Schema<TsignInUser>({
  email: {
    type: String,
    required: [true, "email is required"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address",
    ],
  },
});

export const signInModel = mongoose.model("signIn", signInSchema);
