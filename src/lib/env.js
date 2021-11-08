/*
 * @Description: 环境
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 16:08:26
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-07 16:20:15
 */

const ENV = process.env.NODE_ENV

module.exports = {
  isDev: ENV === 'development',
  notDev: ENV !== 'development',
  isProd: ENV === 'production',
  notProd: ENV !== 'production',
  isTest: ENV === 'test',
  notTest: ENV !== 'test'
}
