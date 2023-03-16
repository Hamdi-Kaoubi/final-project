const fashionModel = require("../Models/fashion")

exports.getFashion=async(req,res)=>{
    try {
        const fashion=await fashionModel.find()
        res.status(200).send({msg:'your fashions are here',fashion})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.addFashion=async(req,res)=>{
    try {
        const fashion= new fashionModel(req.body)
        await fashion.save()
        res.status(200).send({msg:'your fashion is added',fashion})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.editFashion=async(req,res)=>{
    try {
        const fashion=await fashionModel.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        res.status(200).send({msg:'your fashion is updated',fashion})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deleteFashion=async(req,res)=>{
    try {
        await fashionModel.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:'your fashion is deleted'})
    } catch (error) {
        res.status(500).send(error)
    }
}