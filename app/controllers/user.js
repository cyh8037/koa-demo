const User = require('../models/user')

class UserCtl {
    // 查找用户列表
    async find(ctx) {
        ctx.body = await User.find()
    }
    // 创建用户
    async create(ctx) {
        // 校验参数
        ctx.verifyParams({
            name: { type: 'string', required: true },
            password: { type: 'string', required: true }
        })
        // 获取接口参数
        const { name } = ctx.request.body
        const isRepeat = await User.findOne({ name })
        
        if (isRepeat) ctx.throw(409, '用户已被注册')
        // 保存至数据库中并返回
        ctx.body = await new User(ctx.request.body).save()
    }
}

module.exports = new UserCtl()