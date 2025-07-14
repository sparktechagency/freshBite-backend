import { Types } from "mongoose"


export type Trecipe = {
    recipe_name: string,
    recipe_id: Types.ObjectId
}

export type TmealPlan = {
    userEmail: string,
    dates: [string],
    status: 'plan to eat' | 'plan to cook',
    title: string,
    description: string,
    plan_recipes: [Trecipe],
    meal_time : 'breakfast' | 'lunch' | 'snack' | 'dinner',
    portion : number,
    isDelated:boolean
}