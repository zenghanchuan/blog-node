const Router = require('koa-router')
const mongoose = require('../config/config')
const path =require('path');


const users = require('../interface/postUsers');
// const records = require('../interface/postRecent');

const router = new Router();

router.post ('/saveUsers',users.saveUsers);         //第一种写法
router.post ('/findUsers',users.findUsers);
router.post ('/updataUsers',users.updataUsers);

router.post ('/findDynamic',require('../interface/postRecent').findDynamic);    //第二种写法
router.post ('/saveRecords',require('../interface/postRecent').saveRecords);
router.post ('/findRemove',require('../interface/postRecent').findRemove);
router.post ('/updataRecords',require('../interface/postRecent').updataRecords);


router.post ('/findComment',require('../interface/postComment').findComment);   //评论查询
router.post ('/findCommentAll',require('../interface/postComment').findCommentAll); 
router.post ('/saveComment',require('../interface/postComment').saveComment);
router.post ('/remvoeComment',require('../interface/postComment').remvoeComment);


module.exports = router;