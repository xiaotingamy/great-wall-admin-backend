/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 18:19:20
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-08 23:39:00
 */
const {
  getUserInfo,
  createUserInfo
} = require('../services/user')
const { loginFailInfo, registerUserNameExistInfo, registerFailInfo } = require('../lib/errorInfo')
const { InvalidQueryError } = require('../lib/error')

const jwt = require('jsonwebtoken')
const { JWT_SECRET_KEY } = require('../conf/secretKeys')

const user = {}

/**
 * @function: 注册
 * @author: guoxt
 * @param {*} ctx
 * @param {*} next
 * @return {*}
 */
user.register = async (ctx, next) => {
  const { username, password, nickname, sex } = ctx.request.body
  console.log(username, password, 'username')
  const userInfo = await getUserInfo(username)
  console.log(userInfo, 'userInfo')
  if (userInfo) {
    // 用户名已存在
    ctx.errorInfo = registerUserNameExistInfo
    return next()
  }
  try {
    await createUserInfo(username, password, nickname, sex)
    ctx.result = {}
  } catch (ex) {
    ctx.errorInfo = registerFailInfo
  }
  return next()
}

/**
 * @function: 登录
 * @author: guoxt
 * @param {*} ctx
 * @param {*} next
 * @return {*}
 */
user.login = async (ctx, next) => {
  // 获取用户信息
  const { username, password } = ctx.request.body
  if (!username || !password) {
    throw new InvalidQueryError()
  }
  const userInfo = await getUserInfo(username, password)
  if (!userInfo) {
    // 登录失败
    ctx.errorInfo = loginFailInfo
  } else {
    // 登录成功
    let userToken = {
      userId: userInfo.id,
      username: userInfo.username
    }
    let token = jwt.sign(userToken, JWT_SECRET_KEY, { expiresIn: '2h' }) // 有效时长2小时
    ctx.result = {
      ...userInfo,
      token
    }
  }
  return next()
}

module.exports = user
  