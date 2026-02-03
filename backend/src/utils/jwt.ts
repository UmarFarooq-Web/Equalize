import jwt from "jsonwebtoken"
import { IUser } from "../models/user.model"

export const generateAccessToken = (user:IUser) =>{

    const secret = process.env.ACCESS_TOKEN_SECRET || "null"

    return jwt.sign(
        {id:user._id , email:user.email},
        secret,
        {expiresIn:"5m"}
    )
}

export const generateRefreshToken = (user:IUser) =>{

    const secret = process.env.REFRESH_TOKEN_SECRET || "null"

    return jwt.sign(
        {id:user._id},
        secret,
        {expiresIn:"15m"}
    )

}

