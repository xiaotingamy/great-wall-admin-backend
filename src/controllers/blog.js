/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-08 11:56:27
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-08 16:15:30
 */
const { createBlog } = require('../services/blog')
const { createBlogFailInfo } = require('../lib/errorInfo')

const blog = {}

blog.create = async (ctx, next) => {
  const { content, title } = ctx.request.body
  const userId = ctx.jwtData.userId
  console.log(userId, 'userId')
  console.log(content, 'content')
  console.log(title, 'title')

  try {
    // 创建博客
    const blog = await createBlog({
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