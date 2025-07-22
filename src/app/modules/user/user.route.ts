import { Router } from "express";
import { createchildUserController, createTrailUserController, getSingleUserController, updateUserController } from "./user.controller";
import { authentication } from "../../middleware/authentication";


export const userRouter = Router()

userRouter.post('/create-trail-user', createTrailUserController)

userRouter.post('/create-child-user',createchildUserController)

userRouter.patch('/update-user/:userId', updateUserController)

// userRouter.get('/get-single-user',authentication, getSingleUserController)