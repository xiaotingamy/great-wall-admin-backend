/*
 * @Description: 处理数据库以及服务等逻辑
 * @version: 
 * @Author: guoxt
 * @Date: 2021-10-31 17:40:12
 * @LastEditors: guoxt
 * @LastEditTime: 2021-10-31 18:00:48
 */

const fs = require('fs')

const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js')

const services = {}

for (const file of files) {
  if (file.toLowerCase().endsWith('js')) {
    const service = require(`./${file}`)
    services[`${file.replace(/\.js/, '')}`] = service
  }
}

module.exports = services
