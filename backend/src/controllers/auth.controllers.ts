import { Request, Response } from "express"
import { User } from "../models/user.model";
import bcrypt from "bcryptjs"
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";
import { Session } from "../models/session.model";


const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        console.log("Email : " , email)
        console.log("Password : " , password)

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials " })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);


        
        user.refresh_token = refreshToken
        
        const savedUser = await user.save();
        
        const session = new Session({
            userId:savedUser._id,
            accessToken:accessToken
        })

        await session.save();

        res.cookie("refresh-token", refreshToken, {
            httpOnly: true,
            secure: process.env.DEVELOPMENT ? false : true,
            sameSite: "strict",
            maxAge: 15 * 60 * 1000
        })

        res.status(200).json({ success: true, accessToken: accessToken, message: "Login successfully" })
    } catch (error) {
        console.error("Error in auth.controller.login : ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}



const signup = async (req: Request, res: Response) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        const isValid = emailRegex.test(email)

        if (!isValid) {
            return res.status(400).json({ message: "Invalid Email" })
        }

        const dbUser = await User.findOne({ email });

        if (dbUser) {
            return res.status(409).json({ message: "Email already exists" })
        }

        const hashedPawword = await bcrypt.hash(password , 10)

        const user = new User({
            name,
            email,
            password:hashedPawword
        })

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);


        user.refresh_token = refreshToken;

        const savedUser = await user.save()

        const session = new Session({
            userId:savedUser._id,
            accessToken:accessToken
        })

        await session.save();

        res.cookie("refresh-token", refreshToken, {
            httpOnly: true,
            secure: process.env.DEVELOPMENT ? false : true,
            sameSite: "strict",
            maxAge: 15 * 60 * 1000

        })

        res.status(201).json({ accessToken, message: "Account created successfully" });

    } catch (error) {
        console.log("Error in auth.controller.signup : ", error);
        res.status(500).json({ message: "Internal server error" })
    }
}


const user = async(req:Request, res:Response)=>{

    if(!req.user){
        return res.status(401).json({message:"Unauthorized"})
    }
    try {
        const user = req.user
        const fetchedUser = await User.findById(user.id).select("-password -refresh_token -__v");


        if(!fetchedUser){
            return res.status(404).json({message:"User not found"})
        }


        res.status(200).json({success:true , fetchedUser})
    } catch (error) {
        
    }
}


const refresh = (req:Request , res:Response) =>{

}


export default { login , signup ,  user , refresh}