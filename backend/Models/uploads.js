const mongoose=require('mongoose')
const uploadSchema= new mongoose.Schema({
    title:{type:String,required:true},
    domain:{type:String,required:true},
    thumbNailImage:{type:String,required:true},
    video:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
})

const uploadModel= mongoose.model('upload',uploadSchema)
module.exports=uploadModel