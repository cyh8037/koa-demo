const Koa = require('koa')
const koaBody = require('koa-body')
const parameter = require('koa-parameter')
const error = require('koa-json-error')
const mongoose = require('mongoose')

const { dbAddr } = require('./config')
// 获取路由
const routes = require('./routes')

// 获取实例
const app = new Koa()

// 连接数据库 & 错误监听
mongoose.connect(dbAddr, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('mongoose db 连接成功'))
mongoose.connection.on('error', console.error)

app.use(error())
app.use(koaBody())
app.use(parameter(app))

routes(app)

app.listen(3000, () => console.log('start succ, port 3000'))