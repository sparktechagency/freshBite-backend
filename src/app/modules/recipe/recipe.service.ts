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