const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myblog',{useNewUrlParser:true},(err,res)=>{
    if(!err){
        console.log(res)
    }
});

mongoose.connection.on('connected',() =>{
    console.log('数据库连接成功')
})
mongoose.connection.on('disconnected',() =>{
    console.log('数据库连接断开')
})
mongoose.connection.on('error',(err) =>{
    console.log('数据库连接失败' + err)
})

module.exports = mongoose;