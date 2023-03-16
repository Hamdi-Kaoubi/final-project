const express=require('express')
const { getFashion, addFashion, editFashion, deleteFashion } = require('../controllers/fashionControllers')
const routerFashion=express.Router()
routerFashion.get('/getfashion',getFashion)
routerFashion.post('/postfashion',addFashion)
routerFashion.put('/editfashion/:id',editFashion)
routerFashion.delete('/deletefashion/:id',deleteFashion)
module.exports=routerFashion