const express=require('express')
const { getLanguage, addLanguage, editLanguage, deleteLanguage } = require('../controllers/programmingControllers')
const routerProg=express.Router()
routerProg.get('/getlanguage',getLanguage)
routerProg.post('/addlanguage',addLanguage)
routerProg.put('/editlanguage/:id',editLanguage)
routerProg.delete('/deletelanguage/:id',deleteLanguage)
module.exports=routerProg