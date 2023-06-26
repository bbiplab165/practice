const express=require('express')

const app=express()
app.use(express.json());


const router=require('./routes/route')

app.use('/',router)

app.listen(3000,function(){
    console.log('app running on port 3000')
})