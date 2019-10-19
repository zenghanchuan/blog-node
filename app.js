const Koa = require('koa');

const app = new Koa();

const cors = require('koa-cors');

const bodyparser = require('koa-bodyparser');

const views = require('koa-views');  

const path = require('path');

const static = require('koa-static');

const router = require('./router/getRoute');

const postRouter = require('./router/postRoute');

app.use(static(path.join(__dirname,'./dist')));

app.use(views(path.join(__dirname,'./build')))
    .use(cors())
    .use(bodyparser())
    .use(router.routes())
    .use(postRouter.routes())


app.listen(8030)
console.log('服务器启动成功')