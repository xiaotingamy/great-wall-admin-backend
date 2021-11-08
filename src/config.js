/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-10-31 15:32:05
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-07 21:06:07
 */

const path = require('path')

module.exports = {
  port: '3000',
  publicDir: path.resolve(__dirname, './public'),
  logPath: path.resolve(__dirname, './logs/koa-template.log')
}
