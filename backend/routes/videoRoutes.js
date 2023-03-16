const express=require('express')
const { getVideo, addVideo, editVideo, deleteVideo } = require('../controllers/videoEditControllers')
const routerVid=express.Router()
routerVid.get('/getvideo',getVideo)
routerVid.post('/addvideo',addVideo)
routerVid.put('/editvideo/:id',editVideo)
routerVid.delete('/deletevideo/:id',deleteVideo)
module.exports=routerVid