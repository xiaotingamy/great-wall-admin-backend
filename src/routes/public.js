/*
 * @Description: public 路由
 * @version:
 * @Author: guoxt
 * @Date: 2021-10-31 15:45:32
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-08 16:39:24
 */
const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()

router.prefix('/api/public')

router.post('/user/login', controllers.user.login)
router.post('/user/register', controllers.user.register)

module.exports = router
