import { model, Schema , Types} from "mongoose";

export interface IUser {
    _id:Types.ObjectId,
    name:string,
    email:string,
    password:string,
    refresh_token:string,
    createdAt:Date,
    updatedAt:Date,
}


const userSchema = new Schema<IUser>({
    name:{type:String , required:true},
    email:{type:String , required:true , unique:true},
    password:{type:String , required:true},
    refresh_token:{type:String},
} , {timestamps:true})


export const User = model<IUser>("User" , userSchema)