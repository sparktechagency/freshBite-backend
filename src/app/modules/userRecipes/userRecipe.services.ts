import { Request } from "express";
import userRecipemodel from "./userRecipe.model";



export const getUserRecipeService = async (req:Request) => {
  const recipes = await userRecipemodel.find({
        $and: [
            { email: req.user.email },
            { isDeleted: false }
        ]
    });

    if (!recipes || recipes.length === 0) {
        throw new Error("No recipes found for this user");
    }

    return recipes;
}


export const deleteUserRecipeService = async (req: Request) => {
     const { id } = req.query;

    if (!id) {
        throw new Error("Recipe ID is required for deletion");
    }

    const deleted = await userRecipemodel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });

    if (!deleted) {
       throw new Error('something went wrong while deleting the recipe');
    }

    return deleted;

}