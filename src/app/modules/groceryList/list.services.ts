import getSpecialDate from "../../helpers/dateString"
import { MealPlan } from "../mealPlan/plan.model"





export const getIngredientServices = async (email: string) => {
    let allPlanRecipes: any[] = []
    
    try {
        const findingByEmail = await MealPlan.find({ userEmail: email }).populate("recipes.recipe_id").select('dates recipes')


        findingByEmail.map((value: any) => {
            const date = getSpecialDate(value?.dates);
            const finalIngredientListFromMealPlan = value?.recipes?.map((value: any, index: number) => {
                return {
                    recipe_name: value?.recipe_id?.recipe_Name,
                    shopping_date: date,
                    ingredients: value?.recipe_id?.ingredients
                }
            })
            allPlanRecipes.push(...finalIngredientListFromMealPlan)
        })

        return allPlanRecipes

    } catch (err: any) {
        throw new Error(err)
    }

}