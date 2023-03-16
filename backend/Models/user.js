const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:['user','admin'],default:'user'}
})

module.exports=userModel=mongoose.model('user',userSchema)