const mongoose=require('mongoose')
const connectDB=()=>{
    try {
        mongoose.connect(process.env.mongo_url)
        console.log('your database is successfully connected')
    } catch (error) {
        console.log('your database is not connected you need to check the errors')
    }
}

module.exports=connectDB