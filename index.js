const express=require('express')
const bodyParser = require('body-parser');
const app=express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/add-product',(req,res)=>{
    res.send('<form action="/product" method="post"><input type="text" name="productName"/><button type="submit"></button></form>');
    // console.log(req.body);
})
app.post('/product',(req,res)=>{
    
    console.log(req.body);
    // res.redirect('/add-product')
})

app.listen(3000,()=>{
    console.log("connected")
})