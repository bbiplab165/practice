const express=require('express')
const path=require('path')

const router=express.Router()


router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','pages','login.html'))

})
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','pages','message.html'))
})

module.exports=router