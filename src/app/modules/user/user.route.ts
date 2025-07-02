import { Router } from "express";
import { createUserController, gertSingleUserController } from "./user.controller";
import { authentication } from "../../middleware/authentication";


export const userRouter = Router()

userRouter.post('/create-user', createUserController)

userRouter.get('/get-single-user',authentication, gertSingleUserController)