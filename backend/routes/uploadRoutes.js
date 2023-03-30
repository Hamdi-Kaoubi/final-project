const express=require('express')
const { getUpload, addUpload, editUpload, deleteUpload } = require('../controllers/uploadControllers')
const routerUp=express.Router()
routerUp.get('/getupload',getUpload)
routerUp.post('/addupload',addUpload)
routerUp.put('/editupload/:id',editUpload)
routerUp.delete('/deleteupload/:id',deleteUpload)
module.exports=routerUp