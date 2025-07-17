import { MealPlan } from "../mealPlan/plan.model"

function getSpecialDate(dates: string[]): string {
    
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = today.toLocaleDateString();

  if (dates.includes(todayStr)) {
    // console.log(todayStr)
    return todayStr;
  }

  const minDate = new Date(
    Math.min(...dates.map(dateStr => new Date(dateStr).getTime()))
  );
  minDate.setDate(minDate.getDate() - 1);
  return minDate.toLocaleDateString();
}








export const getIngredientServices = async (email: string) => {
    let allPlanRecipes: any[] = []
    
    try {
        const findingByEmail = await MealPlan.find({ userEmail: email }).populate("recipes.recipe_id").select('dates recipes')


        findingByEmail.map((value: any) => {
            const date = getSpecialDate(value?.dates);
            const finalIngredientListFromMealPlan = value?.recipes?.map((value: any, index: number) => {
                return {
                    name: value?.recipe_id?.recipe_Name,
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