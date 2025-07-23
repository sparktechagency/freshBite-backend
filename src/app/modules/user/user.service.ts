import { userModel } from "./user.model";
import { TUser } from "./user.interface";
import { envData } from "../../config";
import jwt from 'jsonwebtoken';
import { Request } from "express";



export const trailUserServices = async (payload: Partial<TUser>) => {

    const existingUser = await userModel.findOne({ email: payload.email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    payload.role = 'trail';
    const creatingTrailUser = await userModel.create(payload);
    if (!creatingTrailUser) {
        throw new Error('something went wrong')
    }

    const accessToken = jwt.sign(
        {
            full_name: creatingTrailUser.full_name,
            email: creatingTrailUser.email,
            role: creatingTrailUser.role,
        },
        envData.secret as string,
        { expiresIn: '7d' }
    )
    return accessToken

}




export const childUserServices = async (req: Request) => {

    if (req?.user.role !== 'family') {
        throw new Error('Unauthorized access')
    }

    const checkexistancy = await userModel.findOne({ email: req.body?.email })
    if (checkexistancy) {
        throw new Error("this child user already exists");
    }


    req.body.role = 'children';
    req.body.full_name = 'child  account'
    req.body.phone = 0;

    const creatingChildUser = await userModel.create(req.body);
    if (!creatingChildUser) {
        throw new Error('something went wrong')
    }

    return creatingChildUser

}



export const vipUserServices = async (req: Request) => {

    if (req?.user.role !== 'admin') {
        throw new Error('Unauthorized access ')
    }

    const existingUser = await userModel.findOne({ email: req?.body.email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    req.body.role = 'vip';
    const creatingVipUser = await userModel.create(req?.body);
    if (!creatingVipUser) {
        throw new Error('something went wrong')
    }

    return creatingVipUser
}




export const getAllUserServices = async (req: Request) => {

    const limit = req.query?.limit ? parseInt(req.query?.limit as string) : 2;
    const page = req.query?.page ? parseInt(req.query?.page as string) : 1;
    const skip = (page - 1) * limit;
    // or even skip logic
    // const skips = (limit*page)-limit


    if (req.user.role !== 'admin') {
        throw new Error("Unauthorized access");
    }
    const user = await userModel.find({ isDeleted: { $eq: false } })
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .select("-password -isDeleted -createdAt -updatedAt -save_recipes -address")
        .lean()

    if (!user) {
        throw new Error("Users not found");
    }

    return user
}



export const updateUserServices = async (req: Request) => {

    const updating = await userModel.findOneAndUpdate(
        { email: req.user.email },
        req.body,
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