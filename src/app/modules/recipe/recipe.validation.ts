import * as z from "zod/v4";


const recipeValidation = z.object({
  recipe_Name: z.string().min(1, "Recipe name is required"),
    description: z.string().trim(),
  
});