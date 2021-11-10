/*
 * @Description: 登录验证中间件
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-08 13:35:47
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-09 22:56:41
 */

const { ErrorModel } = require('../lib/resModel')
const { loginCheckFailInfo } = require('../lib/errorInfo')

/**
 * @function API 登录验证
 * @param {Object} ctx ctx
 * @param {function} next next
 */
async function loginCheck (ctx, next) {
  if (ctx.jwtData && ctx.jwtData.userId) {
    // 已登录
    await next()
    return
  }
  // 未登录
  ctx.body = new ErrorModel(loginCheckFailInfo)
}

module.exports = {
  loginCheck
}
