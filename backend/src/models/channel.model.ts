import {model, Schema} from "mongoose";

const channelSchema = new Schema({
    name:{type:String,required:true},
    topic:String,
    createdBy:{type:Schema.Types.ObjectId,ref:"User",required:true},
    members:[{type:Schema.Types.ObjectId,ref:"User",required:true}],
    createAt:{type:Date,default:Date.now}
})

export default model("Channel",channelSchema)