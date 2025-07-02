
export interface Preparation {
  totalTime: string;
  prepTime: string;
  cookTime: string;
}

export interface TnutritionValue {
  value: string;
  quantity: string;
}

export interface Tingredient {
  name: string;
  quantity: string;
}


export type Tinstruction = {
  title: string,
  videoUrl: string
}

export type TrequiredSkill = {
  title: string;
  videoUrl: string;
};

export type Trating = {
  rating: number,
  review:string
}



export interface Trecipe {
  recipe_Name: string;
  description: string;
  portionSize: number;
  imagesorVideos: string[];
  allergens: string[];
  meal_type: string[];
  recipe_components: string[];
  nutrition_value: TnutritionValue[];
  ingredients: Tingredient[];
  cooking_mode: string[];
  flavor_profile: string[];
  cuisine_type: string[];
  season: string[];
  diet_type: string[];
  preparation: Preparation;
  required_Skill: TrequiredSkill[];
  instruction: [Tinstruction];
  rating: [Trating];
  category: string;
  subCategory: string;
  tag: string[];
  isDeleted: boolean;
}
