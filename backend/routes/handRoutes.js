const express=require('express')
const { getHandMade, addHandMade, editHandMade, deleteHandMade } = require('../controllers/handMadesControllers')
const routerHand=express.Router()
routerHand.get('/gethandmade',getHandMade)
routerHand.post('/addhandmade',addHandMade)
routerHand.put('/edithandmade/:id',editHandMade)
routerHand.delete('/deletehandmade/:id',deleteHandMade)
module.exports=routerHand
