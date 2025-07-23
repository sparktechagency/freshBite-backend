import { Router } from "express";
import { createchildUserController, createTrailUserController, createVipUserController, getAllUserController, getMyProfileController, getSingleUserController, updateUserController } from "./user.controller";
import { authentication } from "../../middleware/authentication";



export const userRouter = Router()

userRouter.post('/create-trail-user', createTrailUserController)

userRouter.post('/create-child-user',authentication, createchildUserController)

userRouter.post('/create-vip', authentication, createVipUserController)

userRouter.patch('/update-user/',authentication, updateUserController)

userRouter.get('/get-single-user', authentication, getSingleUserController)

userRouter.get('/get-all-user', authentication, getAllUserController)

userRouter.get('/my-profile', authentication, getMyProfileController)