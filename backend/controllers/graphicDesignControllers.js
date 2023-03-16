const graphicModel = require("../Models/graphicDesign")

exports.getGraphic=async(req,res)=>{
    try {
        const graphic=await graphicModel.find()
        return res.status(200).send({msg:'your graphic designs are here',graphic})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.addGraphic=async(req,res)=>{
    try {
        const graphic=new graphicModel(req.body)
        await graphic.save()
        res.status(200).send({msg:'new graphic was added',graphic})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.editGraphic=async(req,res)=>{
    try {
        const graphic= await graphicModel.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        res.status(200).send({msg:'your graphic is updated',graphic})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deleteGraphic=async(req,res)=>{
    try {
        await graphicModel.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:'your graphic is deleted'})
    } catch (error) {
        res.status(500).send(error)
    }
}