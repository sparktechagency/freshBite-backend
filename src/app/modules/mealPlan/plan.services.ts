import { TmealPlan } from "./plan.interface";
import { MealPlan } from "./plan.model";

export const createMealPlanServices = async (payload: TmealPlan) => {
    const checkBefore = await MealPlan.find({
        $and: [
            { title: payload?.title },
            { description: payload?.description },
            { meal_time: payload?.meal_time },
            { portion: payload?.portion }
        ]
    }).select('title')

    if (checkBefore.length) {
        throw new Error('this plan already exist')
    }

    const creatingPlan = await MealPlan.create(payload)
    return creatingPlan
}