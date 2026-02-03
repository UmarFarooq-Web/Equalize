import authrouter from "./auth.routes"
import { Router } from "express"

const router = Router();


router.use("/auth" , authrouter)


export default router