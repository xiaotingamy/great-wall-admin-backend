/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-08 11:56:27
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-10 09:47:26
 */
const blogServices = require('../services').blog
const { createBlogFailInfo } = require('../lib/errorInfo')

const blog = {}

blog.create = async (ctx, next) => {
  const { content, title } = ctx.request.body
  const userId = ctx.jwtData.userId

  try {
    // 创建博客
    const blog = await blogServices.createBlog({
      userId,
      content,
      title
    })
    ctx.result = blog
  } catch (ex) {
    ctx.errorInfo = createBlogFailInfo
  }
  return next()
}

module.exports = blog