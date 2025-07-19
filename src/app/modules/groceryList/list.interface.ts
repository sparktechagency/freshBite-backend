import { Date } from "mongoose"
import { Tingredient } from "../recipe/recipe.interface"



export type Tlist = {
    recipe_name:string,
    actual_shopping_date:Date
    ingredients: [Tingredient]
}

export type TGroceryList = {
    title : string,
    shopping_person: string,
    shopping_date : string,
    cover_image:string,
    lists : [Tlist]
}