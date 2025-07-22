import mongoose, { AnyArray } from "mongoose";
import { userModel } from "./user.model";
import { TUser } from "./user.interface";





export const trailUserServices = async (payload: Partial<TUser>) => {

    payload.role = 'trail';
    const creatingTrailUser = await userModel.create(payload);
    if (!creatingTrailUser) {
        throw new Error('something went wrong')
    }

    return creatingTrailUser;

}


export const childUserServices = async (payload:Partial<TUser>) => {

    if (!payload.parent_id) {
        throw new Error('parent_id is required for child user')
    }
   
    payload.role = 'children';
    payload.full_name = 'child  account'
    payload.phone = 0;
    const creatingChildUser = await userModel.create(payload);
    if (!creatingChildUser) {
        throw new Error('something went wrong')
    }

    return creatingChildUser;

}



export const updateUserServices = async (userId: string, payload: Partial<TUser>) => {
    const updating = await userModel.findByIdAndUpdate(
        userId,
        payload,
        {
            new: true,
            runValidators: true,
            context: 'query'
        })

    if (!updating) {
        throw new Error('User not found')
    }

    return updating
}