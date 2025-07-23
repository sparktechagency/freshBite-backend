import { Request } from 'express';
import { Trating_reviews } from './recipe.interface';
import Recipemodel from "./recipe.model"


export const deleteRecipeService = async (id: string) => {
  const deleting = await Recipemodel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true, runValidators: true }
  )

  if (!deleting) {
    throw new Error('internal server Error')
  }
  return deleting
}




export const getAllRecipeServices = async (req: Request) => {

  const limit = req.query?.limit ? parseInt(req.query?.limit as string) : 2;
  const page = req.query?.page ? parseInt(req.query?.page as string) : 1;
  const skip = (page - 1) * limit;


  const getRecipeData = await Recipemodel.find({ isDeleted: { $eq: false } })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 })
    .select('recipe_Name')
    .lean()

  if (!getRecipeData) {
    throw new Error('internal server error')
  }

  return getRecipeData

}




export const addReviewRatingService = async (id: string, payload: Trating_reviews) => {

  const data = {
    ...payload,
    id: Math.random().toString().split('.')[1]
  }
  const checkBefore = await Recipemodel.find({
    $and: [
      { 'rating_reviews.rating': payload?.rating },
      { 'rating_reviews.review': payload?.review }
    ]
  })

  if (checkBefore.length > 0) {
    throw new Error('you have already reviewed')
  }

  const addingReviews = await Recipemodel.findByIdAndUpdate(
    id,
    { $addToSet: { rating_reviews: data } },
    { new: true, runValidators: true })

  if (!addingReviews) {
    throw new Error('internal server error')
  }

  return addingReviews
}




export const deleteReviewServices = async (req: Request) => {
  const updating = await Recipemodel.findByIdAndUpdate(
    req.query?.recipe_id as string,
    { $pull: { rating_reviews: { id: Number(req.body?.id) } } },
    { new: true }
  )
  if (!updating) {
    throw new Error('internal server Error')
  }

  return updating
}