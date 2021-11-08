/*
 * @Description: blog service
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-08 11:54:19
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-08 15:43:28
 */
const { Blog } = require('../models/index')

/**
 * 创建微博
 * @param {Object} param0 创建微博的数据 { userId, content, image }
 */
async function createBlog({ userId, content, title }) {
    const result = await Blog.create({
      userId,
      content,
      title
    })
    return result.dataValues
}

module.exports = {
  createBlog
}
