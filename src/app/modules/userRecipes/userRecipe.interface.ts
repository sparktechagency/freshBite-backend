
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


export interface TuserRecipe {
    email: string;
    recipe_Name: string;
    description: string;
    portionSize: number;
    coverImage: string;
    images: string[]
    allergens: string[];
    recipe_components: string[];
    cooking_mode: string[];
    nutrition_value: TnutritionValue[];
    ingredients: Tingredient[];
    instruction: [string];
    preparation: Preparation;
    tag: string[];
    isDeleted: boolean;
}
