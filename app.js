const Koa = require('koa')
const app = new Koa()
const path = require('path')
const bodyParser = require('koa-bodyparser')
const convert = require('koa-convert')
const staticCache = require('koa-static-cache')
const compress = require('koa-compress')
const cors = require('koa2-cors')

// 解析请求体
app.use(bodyParser())

// 跨域设置
app.use(convert(cors({
  allowMethods: ['GET', 'POST'],
  allowHeaders: ['Content-Type', 'Accept'],
  origin: function(ctx) {
    return '*' // 本地环境
  }
})))

// 中间件 设置gzip
app.use(compress({
  threshold: 2048,
  flush: require("zlib").Z_SYNC_FLUSH
}))

// 静态文件服务，把koa-swagger作为根目录
app.use(convert(staticCache(path.join(__dirname, './'), {
  maxAge: 365 * 24 * 60 * 60,
  dynamic: false // 是否动态监测文件变化
})))

// 服务端口
const port = 8080

// 启动程序，监听端口
app.listen(port, () => {
  console.log(`listening on port ${port} for swagger`)
})
