const Router = require('koa-router')

const router = new Router();

router.get('/',async ctx => {

    await ctx.render('index');
    
})
router.get('/admain*',async ctx => {
    
    await ctx.render('admain');
 
})
router.get('/login',async ctx => {
    
    await ctx.render('login');

})

module.exports = router;