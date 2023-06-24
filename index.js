const express=require('express')
const bodyParser = require('body-parser');
const path = require('path');

const admin=require('./routes/admin.js')
const shop=require('./routes/shop.js')
const app=express()


app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',admin)
app.use('/shop',shop)
app.use('*',(req,res)=>{    
    res.send("<h1>'Please enter a valid route'</h1>")
})

app.listen(3000,()=>{
    console.log("connected")
})