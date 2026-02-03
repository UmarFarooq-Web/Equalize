import mongoose from "mongoose";

export function connectDb(){

    const url = process.env.MONGO_URI

    if(!url){
        throw new Error("Invalid Database Url")
    }

    mongoose.connect(url)
    .then(()=>{
        console.log("Database connected")
    })
    .catch((error)=>{
        console.error("Failed to connect to Database : " , error)
    })
}