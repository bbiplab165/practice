const express=require('express')
const Sequelize=require('./utile/database')
const bodyParser = require('body-parser');

const router=require('./routes/route')

const app=express()
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',router)

Sequelize.sync().then(app.listen(3000,function(){
    console.log("app running on port 3000")
})).catch(err=>console.log(err));


// app.listen(3000,function(){
//     console.log("app running on port 3000")
// })