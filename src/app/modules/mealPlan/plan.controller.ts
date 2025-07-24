import { NextFunction, Request, RequestHandler, Response } from "express";
import { MealPlan } from "./plan.model";
import status from "http-status";
import catchAsync from "../../lib/catchAsync";
import { createMealPlanServices, updatePlanServices } from "./plan.services";


export const createMealPlanController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (req.user?.email !== 'admin') {
        throw new Error("You are not authorized to create a meal plan");
    }
    const creatingPlan = await createMealPlanServices(req)
    res.status(status.OK).json({
        success: true,
        code: status.OK,
        message: "meal plan created successfully",
        response: creatingPlan
    });
})


export const getMealPlanByEmailController: RequestHandler = catchAsync(async (req, res, next) => {
    const findingByEmail = await MealPlan.find({ userEmail: req?.user?.email }).select('-recipes -isDelated -description')
    res.status(status.OK).json({
        success: true,
        code: status.OK,
        message: "meal plan retrived successfully",
        data: findingByEmail
    });
})



export const updatePlanController: RequestHandler = catchAsync(async (req, res, next) => {

     if (req.user?.email !== 'admin') {
        throw new Error("You are not authorized to update a meal plan");
    }
    const updating = await updatePlanServices(req)
    res.status(status.OK).json({
        success: true,
        code: status.OK,
        message: "meal plan updated successfully",
        data: updating
    });
})