
const Users = require('../database/users');

// exports.saveUsers = async(ctx)=>{
//     const users =new Users({
//         username:ctx.request.body.usersName,
//         password:ctx.request.body.password,
//         usersSex:ctx.request.body.usersSex,
//         usersAge:ctx.request.body.usersAge,
//         usersJob:ctx.request.body.usersJob,
//         imageUrl:ctx.request.body.imageUrl,
//         percent:ctx.request.body.percent, 
//     })
//     let result = await users.save();
//     console.log(111)
//     if(result){
//         console.log(5555)
//         ctx.body = {code:1}
//     }
// }
exports.saveUsers = async(ctx)=>{
    
    const users = new Users({
        "username": ctx.request.body.username,
        "password" : ctx.request.body.password,
        "name":ctx.request.body.name,
        "sex":ctx.request.body.sex,
        "job":ctx.request.body.job,
        "hobby":ctx.request.body.hobby,
        "constellation":ctx.request.body.constellation,
        "email":ctx.request.body.email,
    });
    let result = await users.save();
    if(result){
        ctx.body = {code:1,message:'注册成功'}
    }
}

exports.findUsers = async(ctx)=>{
    let result = await Users.find({username:ctx.request.body.username});
    console.log(result)
    if(result[0]){ 
        ctx.body={code:1,message:result[0]}
    }
    else if(result[1]){
        ctx.body = {code:3,message:'查到多条数据'}
    }
    else if(result = []){
        ctx.body = {code:2,message:'该账号未注册'}
    }
}
// exports.findUsers = async(ctx) =>{
//     console.log(222)
//     console.log(ctx.request.body.username)
    
//     Users.find({username:ctx.request.body.username},function(err,docs){
//         if(err){
//             console.log(111)
//             console.log(err)
//         }
//         else if(docs){
//             console.log(222)
//             console.log(docs)
//         }
        
//     });
    
// }


exports.updataUsers=async(ctx)=>{
    // console.log(ctx.request.body._id)
    console.log(ctx.request.body.password)
    let result= await Users.updateMany({username:ctx.request.body.username},ctx.request.body);
    console.log(result)
    if(result){
        ctx.body={code:1,message:'修改成功'}
    } 
} 