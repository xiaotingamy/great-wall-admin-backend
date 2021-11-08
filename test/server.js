
/*
 * @Description: jest server
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 17:55:24
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-08 23:16:44
 */
const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)
