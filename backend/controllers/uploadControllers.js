const uploadModel = require("../Models/uploads")

exports.getUpload=async(req,res)=>{
    try {
        const upload=await uploadModel.find()
        return res.status(200).send({msg:'your uploads are here',upload})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.addUpload=async(req,res)=>{
    try {
        const upload= new uploadModel(req.body)
        await upload.save()
        res.status(200).send({msg:'your new upload is added',upload})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.editUpload=async(req,res)=>{
    try {
        const upload= await uploadModel.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        res.status(200).send({msg:'your upload is updated',upload})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deleteUpload=async(req,res)=>{
    try {
        await uploadModel.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:'your upload is deleted'})
    } catch (error) {
        res.status(500).send(error)
    }
}