/*
 * @Description: sequelize 实例
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 17:43:49
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-09 07:16:25
 */

const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isProd, isTest } = require('../lib/env')

const { host, user, password, database } = MYSQL_CONF
const conf = {
  host,
  dialect: 'mysql'
}

// 走测试用例，不打印sql语句
if (isTest) {
  conf.logging = () => {}
}

// 线上环境，使用连接池
if (isProd) {
  conf.pool = {
    max: 5, // 连接池中最大的连接数量
    min: 0, // 最小
    idle: 10000  // 如果一个连接池 10 s 之内没有被使用，则释放
  }
}
const seq = new Sequelize(database, user, password, conf)


module.exports = seq
