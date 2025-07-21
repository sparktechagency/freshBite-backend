import { Router } from "express";
import { createTrailUserController, getSingleUserController } from "./user.controller";
import { authentication } from "../../middleware/authentication";


export const userRouter = Router()

userRouter.post('/create-trail-user', createTrailUserController)

userRouter.get('/get-single-user',authentication, getSingleUserController)