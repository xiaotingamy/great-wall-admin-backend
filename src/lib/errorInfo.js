/*
 * @Description: 失败信息集合，包括 errno 和 message
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 18:22:25
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-10 09:51:33
 */
module.exports = {
  // 登录失败
  loginFailInfo: {
    errorCode: 40204,
    errorMsg: '登录失败，用户名或密码错误'
  },
  // 未登录
  loginCheckFailInfo: {
    errorCode: 40201,
    errorMsg: '您尚未登录'
  },
  registerUserNameExistInfo: {
    errorCode: 40202,
    errorMsg: '用户已存在!'
  },
  // 注册失败
  registerFailInfo: {
    errorCode: 40203,
    errorMsg: '注册失败，请重试'
  },
  // 创建微博失败
  createBlogFailInfo: {
    errorCode: 11001,
    errorMsg: '创建微博失败，请重试'
  }
}
