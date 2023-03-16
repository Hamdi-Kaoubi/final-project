const handModel = require("../Models/handMades")

exports.getHandMade=async(req,res)=>{
    try {
        const handMade=await handModel.find()
        return res.status(200).send({msg:'your hand made is here',handMade})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.addHandMade=async(req,res)=>{
    try {
        const handMade= new handModel(req.body)
        await handMade.save()
        res.status(200).send({msg:'new hand made added',handMade})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.editHandMade=async(req,res)=>{
    try {
        const handMade= await handModel.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        res.status(200).send({msg:'your hand made is updated',handMade})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deleteHandMade=async(req,res)=>{
    try {
        await handModel.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:'your hand made is deleted'})
    } catch (error) {
        res.status(500).send(error)
    }
}