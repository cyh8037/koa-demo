const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', ctx => {
    ctx.body = 'index page'
})

router.get('/test', ctx => {
    ctx.body = 'test page'
})

app.use(router.routes())

app.listen(3000, () => console.log('start succ, port 3000'))