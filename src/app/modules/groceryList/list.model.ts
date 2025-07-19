import { model, Schema } from "mongoose";
import { TGroceryList, Tlist } from "./list.interface";
import { ingredientSchema } from "../recipe/recipe.model";




export const listFeildSchema = new Schema<Tlist>({
    recipe_name: { type: String, required: [true, 'recipe name is required'], trim: true },
    actual_shopping_date: { type: String, required: [true, 'acctual shopping Date is required'], trim: true },
    ingredients: { type: [ingredientSchema], required: [true, 'this feild is required'], trim: true },
})



const listSchema = new Schema<TGroceryList>({
    title: { type: String, required: [true, 'grocery list name is required'], trim: true },
    shopping_person: { type: String, required: [true, 'grocery list name is required'], trim: true },
    shopping_date: { type: String, required: [true, 'grocery list name is required'], trim: true },
    cover_image:{type:String,required:[true,'covewr image is required']},
    lists: { type: [listFeildSchema], required: [true, 'grocery list feild is required'] }
})

export const ListModel = model('groceryList', listSchema)