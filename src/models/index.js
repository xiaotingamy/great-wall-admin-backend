/*
 * @Description: 数据模型入口文件
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 17:55:24
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-10 09:28:32
 */
const User = require('./User')
const Blog = require('./Blog')

Blog.belongsTo(User, {
  foreignKey: 'userId'
})

User.hasMany(Blog, {
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog
}
