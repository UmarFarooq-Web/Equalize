import { model, Model, Schema, Types } from "mongoose";




export interface ISession {
    _id:Types.ObjectId,
    userId:String,
    accessToken:String,
    createdAt:Date,
    UpdatedAt:Date,
}


const sessionSchema = new Schema<ISession>({
    userId:{type:String , required:true},
    accessToken:{type:String, require:true},
})


export const Session = model<ISession>("Session" , sessionSchema)