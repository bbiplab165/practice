const express=require('express')
const path=require('path')
const route=express.Router()
const userController=require('../controllers/userController')

route.get('/',userController.getAddProduct)

route.post('/create',userController.createUser)

route.all('*',(req,res)=>{
    res.send("<h1>'Please enter a valid url'</h1>")
})

module.exports=route   