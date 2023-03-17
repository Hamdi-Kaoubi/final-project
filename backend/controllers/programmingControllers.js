const programmingModel = require("../Models/programming")

exports.getLanguage=async(req,res)=>{
    try {
        const programming=await programmingModel.find()
        return res.status(200).send({msg:'languages have been found',programming})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.addLanguage=async(req,res)=>{
    try {
        const programming= new programmingModel(req.body)
        await programming.save()
        res.status(200).send({msg:'new language added',programming})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.editLanguage=async(req,res)=>{
    try {
        const programming=await programmingModel.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        res.status(200).send({msg:'your language is updated',programming})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deleteLanguage=async(req,res)=>{
    try {
        await programmingModel.findByIdAndDelete(req.params.id)
        return res.status(200).send({msg:'the language chosen is deleted'})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.getOneLanguage=async(req,res)=>{
    try {
        const programming=await programmingModel.findById(req.params.id)
        return res.status(200).send({msg:'your one languege is here',programming})
    } catch (error) {
        return res.status(500).send(error)
    }
}