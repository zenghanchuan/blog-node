const mongoose=require('../config/config');

var commentsSchema = {
    "name":String,
    "article":String,
    "content":String,
    "data":String
}
var Comment = mongoose.model("comments" , commentsSchema);

exports.findComment = async(ctx) =>{
    // console.log(ctx.request.body.article)
    let result = await Comment.find({article:ctx.request.body.articleId});
    console.log(result)
    if(result){
        ctx.body = {code:1,message:result}
    }
}

exports.saveComment = async(ctx) =>{

    const comment = new Comment({
        "name":ctx.request.body.name,
        "article":ctx.request.body.article,
        "content":ctx.request.body.content,
        "data":ctx.request.body.data,
    });
    console.log(ctx.request.body.article)
    let result = await comment.save();
    console.log(result)
    if(result){
        ctx.body = {code:1,message:'评论成功'}
    }
    else{
        ctx.body = {code:2,message:'错误'}
    }
}

exports.remvoeComment = async(ctx) =>{
    console.log(ctx.request.body.id)
    let result = await Comment.deleteOne({_id:ctx.request.body.id})
    console.log(result)
    if(result){
        ctx.body = {code:1,message:'删除成功'}
    }
    else{
        ctx.body = {code:2,message:'错误'}
    }
}