/*
 * @Description: XX模块路由
 * @version:
 * @Author: guoxt
 * @Date: 2021-10-31 15:45:40
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-09 22:58:51
 */
const Router = require('koa-router')
const controllers = require('../controllers')
const jwtMiddleware = require('../middlewares/jwt')
const { loginCheck } = require('../middlewares/loginCheck')

const router = new Router()

router.prefix('/api')
router.use(jwtMiddleware)

router.post('/create/blog', loginCheck, controllers.blog.create)

module.exports = router
