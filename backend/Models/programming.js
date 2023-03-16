const mongoose=require('mongoose')
const programmingSchema= new mongoose.Schema({
    title:{type:String,required:true},
    image:String,
    category:String,
    content:{type:Array,required:true}
})

const programmingModel=mongoose.model('programming',programmingSchema)
module.exports=programmingModel