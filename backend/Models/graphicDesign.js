const mongoose=require('mongoose')
const graphicSchema= new mongoose.Schema({
    title:{type:String,required:true},
    image:String,
    category:String,
    content:{type:Array,required:true}
})

const graphicModel=mongoose.model('graphicDesign',graphicSchema)
module.exports=graphicModel