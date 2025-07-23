import { Request } from "express";
import { TmealPlan } from "./plan.interface";
import { MealPlan } from "./plan.model";

export const createMealPlanServices = async (req:Request) => {
    const checkBefore = await MealPlan.find({
        $and: [
            { title: req?.body?.title },
            { description: req?.body?.description },
            { meal_time: req?.body?.meal_time },
            { portion: req?.body?.portion }
        ]
    }).select('title')

    if (checkBefore.length) {
        throw new Error('this plan already exist')
    }

    const creatingPlan = await MealPlan.create({...req.body, userEmail: req?.user?.email } as TmealPlan)
    return creatingPlan
}


export const updatePlanServices = async (req:Request)=> {
const updating = await MealPlan.findByIdAndUpdate(
        req?.query?.id,
        req.body,
        {
            new: true,
            runValidators: true,
            context: 'query'
        }
    )

    if(!updating){
        throw new Error('meal plan not found')
    }

    return updating
}