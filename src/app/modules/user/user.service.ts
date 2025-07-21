import mongoose from "mongoose";
import { TtrailUser } from "../role/trail/trail.interface";
import { Tuser } from "./user.interface";
import { userModel } from "./user.model";
import { trailUserModel } from "../role/trail/trail.model";




export const trailUserServices = async (payload: TtrailUser) => {

    const session = await mongoose.startSession()

    const userData: Partial<Tuser> = {
        email: payload?.email,
        password: payload?.password,
        role: "trail",
        isDeleted: false
    }

    try {
        session.startTransaction()
        const creatingUser = await userModel.create([userData], { session })
       
        if (!creatingUser.length) {
            throw new Error('something went wrong')
        }

        payload.user_id = creatingUser[0]?._id;

        const creatingTrailUser = await trailUserModel.create([payload], { session })
        if (!creatingTrailUser?.length) {
            throw new Error('something went wrong')
        }


        await session.commitTransaction()
        await session.endSession()
        return creatingTrailUser

    } catch (err: any) {
        await session.abortTransaction()
        await session.endSession()
        throw new Error(err)
    }


}