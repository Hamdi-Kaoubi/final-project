const mongoose=require('mongoose')
const fashionSchema= new mongoose.Schema({
    title:{type:String,required:true},
    image:String,
    category:String,
    content:{type:Array,required:true}
})
const fashionModel= mongoose.model('fashion',fashionSchema)
module.exports=fashionModel