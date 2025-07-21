import mongoose, { Schema } from "mongoose";
import { Tsaves, TtrailUser } from "./trail.interface";



const saveSchema = new Schema<Tsaves>({
  recipe_name: { type: String, trim: true, required: [true, 'recipe_name is required'] },
  recipe_id: { type: Schema.Types.ObjectId, ref: 'recipes', required: true }

})

const trailUserSchema = new Schema<TtrailUser>({

  user_id: { type: Schema.Types.ObjectId, required: true },

  full_name: {
    type: String,
    required: [true, 'full name is required'],
    maxlength: [100, "name length have to within 100 charactrs"],
  },

  phone: {
    type: Number,
    default: 0,
    minlength: [5, "number minimum 5 characters"],
  },
  address: { type: String, maxlength: [100, 'address must be describe within 100 character'], default: '' },
  save_recipes: { type: [saveSchema], default: [] },
});

export const trailUserModel = mongoose.model("trail-users", trailUserSchema);
