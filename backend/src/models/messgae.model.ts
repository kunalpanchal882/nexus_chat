import { Schema,model } from "mongoose";

const messageSchema = new Schema({
    channelId:{type:Schema.Types.ObjectId,ref:"Channel"},
    senderId:{type:Schema.Types.ObjectId,ref:"User"},
    text:{type:String},
    createAt:{type:Date,default:Date.now}
})

const userModel = model("Message",messageSchema)

export default userModel