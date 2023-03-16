const mongoose=require('mongoose')
const handSchema= new mongoose.Schema({
    title:{type:String,required:true},
    image:String,
    category:String,
    content:{type:Array,required:true}
})

const handModel=mongoose.model('handMade',handSchema)
module.exports=handModel