const Koa = require('koa')
const cors = require('koa2-cors')
const router = require('./router')

const app = new Koa()

// 端口
const port = 3000

// 配置跨域
app.use(cors())

// 加载路由
app.use(router)

app.listen(port, () => {
  console.log(`服务启动成功, 监听端口 => ${port}`)
})
