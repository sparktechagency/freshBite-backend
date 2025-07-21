import { Schema, model, Types } from 'mongoose';
import { TmealPlan, Trecipe } from './plan.interface';



const recipeSchema = new Schema<Trecipe>({
    recipe_name: { type: String, required: true },
    recipe_id: { type: Schema.Types.ObjectId, ref:'recipes', required: true}
});

const mealPlanSchema = new Schema<TmealPlan>({
    userEmail: {
        type: String,
        trim: true,
        required: [true, "email is required"],
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address",
        ],
    },
    dates: {
        type: [String],
        required: [true, 'date is required']
    },
    status: {
        type: String,
        enum: {
            values: ['plan to eat', 'plan to cook'],
            message: "{VALUE} is not a valid status"
        },
        required: [true, 'status is required'],
        default: 'plan to cook',
    },
    title: {
        type: String,
        required: true,
        trim: true, 
    },
    description: {
        type: String,
        required: [true, 'description is required'],
        trim: true
    },
    recipes: {
        type: [recipeSchema],
        required: [true, 'recipes is required'],
    },
    meal_time: {
        type: String,
        enum: {
            values:['breakfast', 'lunch', 'snack', 'dinner'],
            message:"{VALUE} is not a valid meal time"
        },
        required: [true, 'meal time is required'],
    },
    portion: {
        type: Number,
        required: [true, 'portion size is required'],
        min: [1, 'portion size must be up to 1']
    },
    isDelated: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});


export const MealPlan = model('MealPlan', mealPlanSchema);