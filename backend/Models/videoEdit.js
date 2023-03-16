const mongoose=require('mongoose')
const videoSchema= new mongoose.Schema({
    title:{type:String,required:true},
    image:String,
    category:String,
    content:{type:Array,required:true}
})

const videoModel=mongoose.model('videoEdit',videoSchema)
module.exports=videoModel