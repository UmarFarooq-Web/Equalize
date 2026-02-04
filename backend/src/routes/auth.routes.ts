import { Router } from "express";
import authControllers from "../controllers/auth.controllers";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();


router.get("/login", authControllers.login)

router.post("/signup", authControllers.signup)

router.get("/refresh" , authControllers.refresh)

router.get("/user", authMiddleware.authenticate, authControllers.user)

export default router