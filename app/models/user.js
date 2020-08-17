/**
 * 用户表
 */
const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    // 增加表规则
    name: { type: String, required: true },
    password: { type: String, required: true, select: false }
})

module.exports = model('User', userSchema)