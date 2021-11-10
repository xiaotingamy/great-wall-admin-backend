/*
 * @Description: blog service
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-08 11:54:19
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-10 09:46:18
 */
const { Blog } = require('../models/index')

const blog = {
  /**
   * @function: 创建一条博客
   * @author: guoxt
   * @param {*} userId
   * @param {*} content
   * @param {*} title
   * @return {*}
   */  
  async createBlog({ userId, content, title }) {
    const result = await Blog.create({
      userId,
      content,
      title
    })
    return result.dataValues
  }
}

module.exports = blog
