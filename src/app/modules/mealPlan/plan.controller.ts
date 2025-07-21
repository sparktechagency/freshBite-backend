import { NextFunction, Request, RequestHandler, Response } from "express";
import { MealPlan } from "./plan.model";
import status from "http-status";
import catchAsync from "../../lib/catchAsync";
import { createMealPlanServices, updatePlanServices } from "./plan.services";


export const createMealPlanController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const creatingPlan = await createMealPlanServices(req?.body)
    res.status(status.OK).json({
        success: true,
        code: status.OK,
        message: "meal plan created successfully",
        response: creatingPlan
    });
})


export const getMealPlanByEmailController: RequestHandler = catchAsync(async (req, res, next) => {
    const findingByEmail = await MealPlan.find({ userEmail: req?.query?.email }).select('-recipes -isDelated -description')
    res.status(status.OK).json({
        success: true,
        code: status.OK,
        message: "meal plan retrived successfully",
        data: findingByEmail
    });
})



export const updatePlanController: RequestHandler = catchAsync(async (req, res, next) => {

    const updating = await updatePlanServices(req)
    res.status(status.OK).json({
        success: true,
        code: status.OK,
        message: "meal plan updated successfully",
        data: updating
    });
})