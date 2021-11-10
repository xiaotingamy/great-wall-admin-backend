/*
 * @Description: user service
 * @version: 
 * @Author: guoxt
 * @Date: 2021-10-31 17:40:20
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-10 09:44:47
 */
const { User } = require('../models/index')

const user = {
  /**
   * @function: 创建用户
   * @author: guoxt
   * @param {*} username
   * @param {*} password
   * @param {*} nickname
   * @param {*} sex
   * @return {*}
   */  
  async createUserInfo (username, password, nickname, sex) {
    const result = await User.create({
      username,
      password,
      nickname,
      sex
    })
    return result.dataValues
  },
  
  /**
   * @function: 查询用户
   * @author: guoxt
   * @param {*} username
   * @param {*} password
   * @return {*}
   */  
  async getUserInfo (username, password) {
    // 查询条件
    const whereOpt = {
      username
    }
    if (password) {
      Object.assign(whereOpt, { password })
    }
  
    // 查询
    const result = await User.findOne({
      attributes: ['id', 'username', 'nickname'],
      where: whereOpt
    })
    if (result === null) {
      // 未找到
      return result
    }
  
    return result.dataValues
  }
}

module.exports = user
