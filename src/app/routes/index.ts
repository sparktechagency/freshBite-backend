import { Router } from "express";
import { userRouter } from "../modules/user/user.route";
import { recipeRoutes } from "../modules/recipe/recipe.route";
import { signInRoute } from "../modules/signIn/signin.route";
import { mealRouter } from "../modules/mealPlan/plan.route";


export const router = Router()

router.use('/user', userRouter)
router.use('/recipe', recipeRoutes)
router.use('/meal',mealRouter)


