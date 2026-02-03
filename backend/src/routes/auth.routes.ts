import { Router } from "express";
import authControllers from "../controllers/auth.controllers";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();


router.get("/login", authControllers.login)

router.post("/signup", authControllers.signup)

router.get("/user", authMiddleware.authenticate,)

export default router