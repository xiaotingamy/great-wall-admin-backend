/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-10-31 16:45:15
 * @LastEditors: guoxt
 * @LastEditTime: 2021-10-31 16:47:47
 */
const corsHandler = {
  origin: function (ctx) {
    if (ctx.url === '/test') {
      // 这可以配置不运行跨域的接口地址
      return false
    }
    return '*'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}

module.exports = {
  corsHandler
}
