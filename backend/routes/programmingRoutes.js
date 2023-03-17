const express=require('express')
const { getLanguage, addLanguage, editLanguage, deleteLanguage, getOneLanguage } = require('../controllers/programmingControllers')
const routerProg=express.Router()
routerProg.get('/getlanguage',getLanguage)
routerProg.get('/getonelanguage/:id',getOneLanguage)
routerProg.post('/addlanguage',addLanguage)
routerProg.put('/editlanguage/:id',editLanguage)
routerProg.delete('/deletelanguage/:id',deleteLanguage)
module.exports=routerProg