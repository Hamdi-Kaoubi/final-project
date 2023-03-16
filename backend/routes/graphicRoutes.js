const express=require('express')
const { getGraphic, addGraphic, editGraphic, deleteGraphic } = require('../controllers/graphicDesignControllers')
const routerGraph=express.Router()
routerGraph.get('/getgraphic',getGraphic)
routerGraph.post('/addgraphic',addGraphic)
routerGraph.put('/editgraphic/:id',editGraphic)
routerGraph.delete('/deletegraphic/:id',deleteGraphic)
module.exports=routerGraph