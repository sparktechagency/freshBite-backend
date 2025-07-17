import { RequestHandler } from "express";
import catchAsync from "../../lib/catchAsync";
import { ListModel } from "./list.model";
import status from "http-status";
import { getIngredientServices } from "./list.services";



export const createListController: RequestHandler = catchAsync(async (req, res, next) => {
    const creating = await ListModel.create(req.body)
    res.status(status.OK).json({
        success: true,
        code: status.OK,
        message: "grocery list created created successfully",
        data: creating
    });
})



export const getIngredientFromMealPlan: RequestHandler = catchAsync(async (req, res, next) => {
    const manupulatingIngredient = await getIngredientServices(req?.query?.email as string)

    res.status(status.OK).json({
        success: true,
        code: status.OK,
        message: "meal plan retrived successfully",
        data: manupulatingIngredient
    });
})