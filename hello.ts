// export const childUserServices = async (payload: any) => {
    //     const session = await mongoose.startSession()

    //     const userData: Partial<TUser> = {
    //         email: payload?.email,
    //         password: payload?.password,
    //         role: "children",
    //         isDeleted: false
    //     }

    //     try {
    //         session.startTransaction()

    //         //create user task
    //         const creatingUser = await userModel.create([userData], { session })
    //         if (!creatingUser.length) {
    //             throw new Error('something went wrong')
    //         }

    //         //create child user task
    //        if( !payload.parent_id){
    //             throw new Error('parent_id is required')
    //         }

    //         payload.user_id = creatingUser[0]?._id;
    //         payload.parent_id = payload?.parent_id;
    //         payload.full_name = 'child user';
    //         payload.phone = 0;
    //         const creatingchildUser = await trailUserModel.create([payload], { session })
    //         if (!creatingchildUser?.length) {
    //             throw new Error('something went wrong')
    //         }

    //         await session.commitTransaction()
    //         await session.endSession()
    //         return creatingchildUser

    //     } catch (err: any) {
    //         await session.abortTransaction()
    //         await session.endSession()
    //         throw new Error(err)
    //     }

// }



