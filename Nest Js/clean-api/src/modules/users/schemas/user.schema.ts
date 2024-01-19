import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

 

@Schema()
export class User{
    @Prop({required: true })
    username:string;

    @Prop({required: false})
    email?:string;

    @Prop({required: false})
    id?:number;  


}

export const UserSchema=SchemaFactory.createForClass(User)