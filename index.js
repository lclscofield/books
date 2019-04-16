const Koa = require('koa')
const views = require('koa-views')
const static = require('koa-static')
const path = require('path')
const router = require('./router')

const app = new Koa()

// 端口
const port = 3000

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
app.use(static(path.join(__dirname, staticPath)))

// 加载模板引擎
app.use(
  views(path.join(__dirname, './views'), {
    extension: 'ejs'
  })
)

// 加载路由
app.use(router)

app.listen(port, () => {
  console.log(`服务启动成功, 监听端口 => ${port}`)
})
