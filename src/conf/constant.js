/*
 * @Description: 常量
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 17:17:59
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-08 22:56:50
 */
const path = require('path')

module.exports = {
  port: '3000',
  secret: '',
  publicDir: path.resolve(__dirname, '../public'),
  logPath: path.resolve(__dirname, '../logs/koa-template.log')
}