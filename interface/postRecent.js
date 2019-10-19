const mongoose=require('../config/config');

//创建一个schema
var recordsSchema = {
    "username":Number,
    "data": String,
    "type" : String,
    "simpleC" : String,
    "author":String
};

//创建一个模型
var Records = mongoose.model("records" , recordsSchema);

//查询方法
exports.findDynamic = async(ctx) =>{
    console.log(ctx.request.body.username)
    let result = await Records.find({username:ctx.request.body.username});
    console.log(result);
    if(result){
        ctx.body = {code:1,message:result}
    }
    else if(result == []){
        ctx.body = {code:2,message:'暂无动态!!!'}
    }
}
//此方法根据文章的类型查找  未做细化的重复查询处理  请个人保证文章类型的唯一性。。。
exports.findRemove = async(ctx) =>{
    console.log(ctx.request.body.type)
    let result = await Records.deleteOne({type:ctx.request.body.type,username:ctx.request.body.username});
    console.log(result)
    if(result){
        ctx.body = {code:1,message:"删除成功"}
    }
}

exports.saveRecords = async(ctx) =>{
    const records = new Records({
        "username": ctx.request.body.username,
        "data":ctx.request.body.data,
        "type":ctx.request.body.type,
        "simpleC":ctx.request.body.simpleC,
        "author":ctx.request.body.author,
    });
    console.log(ctx.request.body.username)
    let result = await records.save();
    if(result){
        ctx.body = {code:1,message:'发布成功'}
    }
}

exports.updataRecords = async(ctx) =>{
    console.log(ctx.request.body.id)
    let result = await Records.updateOne({_id:ctx.request.body.id},ctx.request.body)
    console.log(result)
    if(result){
        ctx.body = {code:1,message:'修改成功'}
    }
}

// Records.find({"age" : {$gt : 12}},function(err,docs){
//     if(docs){
//         console.log(docs);
//     }
//     else if(err){
//         console.log(err);
//     }
// });




// const Records = require('../database/records');
// exports.findDynamic = async(ctx) =>{
//     console.log(111)
//     console.log(ctx.request.body.type)
//     let result = await Records.find();
//     console.log(result);
// }