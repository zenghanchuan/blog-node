const mongoose=require('../config/config');

const Shema = mongoose.Schema;
// const usersShema =new Shema({
//     // imageUrl:{type:String},
//     username:{type:String},
//     password:{type:String}
//     // usersSex:{type:String},
//     // usersAge:{type:String},
//     // usersJob:{type:String},
//     // percent:{type:Array},
// });
const usersShema =new Shema({
        "username": {type:String},
        "password" : {type:String},
        "name":{type:String},
        "sex":{type:String},
        "job":{type:String},
        "hobby":{type:String},
        "constellation":{type:String},
        "email":{type:String},
});

module.exports= mongoose.model('User', usersShema); 