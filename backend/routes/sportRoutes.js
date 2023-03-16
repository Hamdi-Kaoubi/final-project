const express=require('express')
const { getSport, addSport, editSport, deleteSport } = require('../controllers/sportControllers')
const routerSport=express.Router()
routerSport.get('/getsport',getSport)
routerSport.post('/addsport',addSport)
routerSport.put('/editsport/:id',editSport)
routerSport.delete('/deletesport/:id',deleteSport)
module.exports=routerSport