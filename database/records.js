// const mongoose=require('../config/config');
// var recordsSchema = {
//     "data": String,
//     "type" : String,
//     "simpleC" : String,
//     "author":String
// };
// var Records = mongoose.model("records" , recordsSchema);



const mongoose=require('../config/config');

const Shema = mongoose.Schema;
const recordsSchema =new Shema({
    "data": String,
    "type" : String,
    "simpleC" : String,
    "author":String
});

module.exports= mongoose.model('Records', recordsSchema); 