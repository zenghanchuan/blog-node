const mongoose = require('../config/config');
//创建一个schema
var setupSchema = {
    "name": String,
    "sex" : String,
    "job" : String,
    "hobby":String,
    "constellation":String,
    "email":String
};
//创建一个模型
var Setup = mongoose.model("setup" , setupSchema);
//查询方法
exports.findSetup = async(ctx) =>{
    console.log(ctx.request.body.username)
    let result = await Setup.find();
    console.log(result)
}