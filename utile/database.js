const Sequelize=require('sequelize')

const sequelize=new Sequelize('test','root','MICROMAx1#',{
    dialect:'mysql',host:'localhost'
})

module.exports=sequelize   