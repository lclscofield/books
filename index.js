const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const router = require('./router')

const app = new Koa()

// 端口
const port = 3000

// 加载路由
app.use(router)

// 加载模板引擎
app.use(
  views(path.join(__dirname, './views'), {
    extension: 'ejs'
  })
)

app.use(async ctx => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title
  })
})

app.listen(port, () => {
  console.log(`服务启动成功, 监听端口 => ${port}`)
})
