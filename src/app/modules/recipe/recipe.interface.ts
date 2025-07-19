import { Types } from "mongoose";


export interface Preparation {
  totalTime: string;
  prepTime: string;
  cookTime: string;
}

export interface TnutritionValue {
  nutrient: string;
  amount: string;
  unit: 'gm' | 'mg' | 'kcal'
}

export interface Tingredient {
  name: string;
  quantity: string;
  unit: 'tb' | 'kg' | 'gm' | 'mg'
}


export type Tinstruction = {
  description: string,
  videoUrl: string
}

export type TrequiredSkill = {
  title: string;
  videoUrl: string;
  description: string
};

export type Trating_reviews = {
  rating: number,
  review: string,
  user_id : Types.ObjectId,
  id:Number
  isDeleted:boolean
}



export interface Trecipe {
  recipe_Name: string;
  description: string;
  portionSize: number;
  coverImage: string;
  images : string[]
  allergens: string[];
  recipe_components: string[];
  cooking_mode: string[];
  nutrition_value: TnutritionValue[];
  ingredients: Tingredient[];
  preparation: Preparation;
  required_Skill: TrequiredSkill[];
  instruction: [Tinstruction];
  rating_reviews: [Trating_reviews];
  tag: string[];
  isDeleted: boolean;
}
