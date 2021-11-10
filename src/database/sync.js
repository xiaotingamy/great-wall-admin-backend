/*
 * @Description: 同步数据库
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 17:55:24
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-10 07:05:42
 */
const seq = require('./seq')

require('../models/index')

// 测试连接
seq.authenticate().then(() => {
  console.log('auth ok')
}).catch(() => {
  console.log('auth err')
})

// 执行同步
seq.sync({ alter: true }).then(() => {
  console.log('sync ok')
  process.exit()
})
