import { Request, Response, NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { Session } from "../models/session.model"





const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const authHeader = req.headers.authorization

        if (!authHeader) {
            return res.status(401).json({ message: "Invalid Access Token" })
        }

        const accessToken = authHeader.split(" ")[1];

        let decodedPayload = null;


        try {
            const secret = process.env.ACCESS_TOKEN_SECRET || "null"
            decodedPayload = jwt.verify(accessToken, secret) as JwtPayload;
        } catch (err) {
            return res.status(401).json({ message: "Invalid Access Token" })
        }

        if (!decodedPayload) {
            return res.status(401).json({ message: "Invalid Access Token" })
        }

        if (!decodedPayload.id) {
            return res.status(401).json({ message: "Invalid Access Token" })

        }

        const session = await Session.findById(decodedPayload.id)
        console.log(decodedPayload)

        if (!session) {
            return res.status(401).json({ message: "Invalid Access Token" })
        }

        req.user = decodedPayload

        next();

    } catch (error) {
        console.log("Error in auth.middleware.authenticate : ", error)
        res.status(500).json({ message: "Internal Server Error" })
    }

}


export default { authenticate }