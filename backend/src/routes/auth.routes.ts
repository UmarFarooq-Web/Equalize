import { Router } from "express";

const router = Router();


router.get("/login" , ()=>{
    console.log("Login")
})


export default router