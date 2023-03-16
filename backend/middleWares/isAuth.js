const jwt=require('jsonwebtoken')
const userModel=require('../Models/user')
exports.isAuth=async(req,res,next)=>{
    const token=req.header('token')
    try {
        if (!token){
            return res.status(400).send('you are not authorised !')
        }else {
            const dcode=jwt.verify(token,process.env.secretKey)
            if (!dcode) {
                return res.status(400).send('you are not authorised !')
            }else {
                const user=await userModel.findById(dcode.id)
                req.user=user
                next()
            }
        }
    } catch (error) {
        console.log(error)
    }
}