const Router = require('koa-router')
const router = new Router({ prefix: '/user' })

const {
    create,
    find
} = require('../controllers/user')

router.get('/', find)
router.post('/', create)

module.exports = router