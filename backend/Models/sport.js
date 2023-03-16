const mongoose=require('mongoose')
const sportSchema= new mongoose.Schema({
    title:{type:String,required:true},
    image:String,
    category:String,
    content:{type:Array,required:true}
})

const sportModel=mongoose.model('sport',sportSchema)
module.exports=sportModel