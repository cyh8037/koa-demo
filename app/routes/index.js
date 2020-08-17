const fs = require('fs')

module.exports = app => {
    // 获取文件目录动态添加路由
    fs.readdirSync(__dirname).forEach(file => {
        // 跳过自己
        if (file !== 'index.js') {
            const route = require(`./${file}`)
            // allowedMethods 允许options预请求
            app.use(route.routes()).use(route.allowedMethods())
        }
    })
}