const videoModel = require("../Models/videoEdit")

exports.getVideo=async(req,res)=>{
    try {
        const video=await videoModel.find()
        return res.status(200).send({msg:'your video editors are here',video})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.addVideo=async(req,res)=>{
    try {
        const video= new videoModel(req.body)
        await video.save()
        res.status(200).send({msg:'your new video editor was added',video})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.editVideo=async(req,res)=>{
    try {
        const video=await videoModel.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        res.status(200).send({msg:'your video editor is updated',video})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deleteVideo=async(req,res)=>{
    try {
        await videoModel.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:'your video editor is deleted'})
    } catch (error) {
        res.status(500).send(error)
    }
}