import { Types } from "mongoose";


export type Tsaves = {
  recipe_name: string,
  recipe_id: Types.ObjectId
}

export type TUser = {
  email: string;
  role: "trail" | "single" | "family" | "children" | "vip" | "admin";
  password: string;
  parent_id?: Types.ObjectId;
  full_name: string;
  phone: number;
  address: string;
  save_recipes: [Tsaves]
  isDeleted: boolean;
}