import { listRoute } from './../modules/groceryList/list.route';
import { Router } from "express";
import { userRouter } from "../modules/user/user.route";
import { recipeRoutes } from "../modules/recipe/recipe.route";
import { signInRoute } from "../modules/signIn/signin.route";
import { mealRouter } from "../modules/mealPlan/plan.route";
import { userRecipeRoute } from '../modules/userRecipes/userRecipe.route';
import { settingsRouter } from '../modules/settings/settings.route';


export const router = Router()

router.use('/user', userRouter)
router.use('/recipe', recipeRoutes)
router.use('/meal',mealRouter)
router.use('/list',listRoute)
router.use('/auth', signInRoute)
router.use("/user-recipe", userRecipeRoute)

router.use('/settings',settingsRouter)

