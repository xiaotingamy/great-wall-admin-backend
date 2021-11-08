/*
 * @Description: 博客数据模型
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-08 11:48:58
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-08 11:52:42
 */
const seq = require('../database/seq')
const { INTEGER, STRING, TEXT } = require('../database/types')

const Blog = seq.define('blog', {
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: '用户 ID'
  },
  title: {
    type: STRING,
    allowNull: false,
    comment: '标题'
  },
  content: {
    type: TEXT,
    allowNull: false,
    comment: '内容'
  }
})

module.exports = Blog
