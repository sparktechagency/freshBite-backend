import { envData } from "../../config"
import { userModel } from "../user/user.model"
import jwt from 'jsonwebtoken'
import { TsignInUser } from "./sign.interface"


export const signInService = async (payload:TsignInUser) => {
    const checkExistancy = await userModel.findOne({ email: payload.email })

    
    if (!checkExistancy) {
        throw new Error('user is not exist')
    }

    if (checkExistancy.password !== payload.password) {
        throw new Error('invalid password')
    }

    if (checkExistancy.isDeleted) {
        throw new Error('unthorized user')
    }
    
    const credentials = {
        full_name: checkExistancy.full_name ,
        email: checkExistancy.email,
        role: checkExistancy.role,
    }
    const accessToken = jwt.sign(credentials, envData.secret as string, { expiresIn: '7d' })
    return accessToken
}
