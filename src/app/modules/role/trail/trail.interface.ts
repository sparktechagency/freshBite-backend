import { Types } from "mongoose";


export type Tsaves = {
  recipe_name: string,
  recipe_id: Types.ObjectId
}

export type TtrailUser = {
  user_id: Types.ObjectId;
  email?: string;
  password?: string;
  full_name: string;
  phone: number;
  address: string;
  save_recipes: [Tsaves]
}