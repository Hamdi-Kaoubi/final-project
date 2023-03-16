const sportModel = require("../Models/sport")

exports.getSport=async(req,res)=>{
    try {
        const sport=await sportModel.find()
        res.status(200).send({msg:'your sports are here',sport})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.addSport=async(req,res)=>{
    try {
        const sport= new sportModel(req.body)
        await sport.save()
        res.status(200).send({msg:'your new sport is added',sport})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.editSport=async(req,res)=>{
    try {
        const sport=await sportModel.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        res.status(200).send({msg:'your sport is updated',sport})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deleteSport=async(req,res)=>{
    try {
        await sportModel.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:'your sport is deleted'})
    } catch (error) {
        res.status(500).send(error)
    }
}