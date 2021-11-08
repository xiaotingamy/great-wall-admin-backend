/*
 * @Description: 回传客户端的数据格式处理
 * @Author: guoxt
 * @Date: 2021-10-31 16:11:29
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-08 20:03:40
 */

const { logger } = require('./logger')
const { SuccessModel, ErrorModel } = require('../lib/resModel')

// 这个middleware用于将ctx.result中的内容最终回传给客户端
// 回传的格式遵循这样的格式：{ success: true, errorMsg: '错误信息', errorCode: '错误代码', data: {} }
const responseHandler = (ctx) => {
  ctx.type = 'json'
  if (ctx.errorInfo) {
    ctx.body = new ErrorModel(ctx.errorInfo)
  } else if (ctx.result !== undefined) {
    ctx.body = new SuccessModel(ctx.result)
  } else {
    ctx.body = new ErrorModel()
  }
}

// 这个middleware处理在其它middleware中出现的异常
// 并将异常消息回传给客户端：{ success: false, errorCode: '错误代码', errorMsg: '错误信息' }
const errorHandler = (ctx, next) => {
  return next().catch(err => {
    if (err.code == null) {
      logger.error(err.stack)
    }
    ctx.body = {
      errorCode: err.code || -1,
      data: null,
      errorMsg: err.message.trim()
    }

    ctx.status = 200 // 保证返回状态是 200, 这样前端不会抛出异常
    return Promise.resolve()
  })
}

module.exports = {
  responseHandler,
  errorHandler
}
