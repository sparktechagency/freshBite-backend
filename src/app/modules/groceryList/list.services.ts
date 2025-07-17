import { MealPlan } from "../mealPlan/plan.model"

export const getIngredientServices = async (email: string) => {
    let allPlanRecipes: any[] = []
    try {
        const findingByEmail = await MealPlan.find({ userEmail: email }).populate("recipes.recipe_id").select('-dates -isDelated -description -createdAt -updatedAt')

        const getEcachFeildRecipes = findingByEmail.map((value: any) => value?.recipes)
        getEcachFeildRecipes.forEach((value: any) => allPlanRecipes.push(...value))
        const finalIngredientListFromMealPlan = allPlanRecipes.map((value: any) => {
            return {
                name: value?.recipe_id?.recipe_Name,
                ingredients: value?.recipe_id?.ingredients
            }
        })
        return finalIngredientListFromMealPlan
    } catch (err: any) {
        throw new Error(err)
    }
}