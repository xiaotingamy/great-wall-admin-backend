/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-10-31 15:27:24
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-09 22:29:31
 */
'use strict'

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')()
const staticCache = require('koa-static-cache')
const cors = require('koa2-cors')
const helmet = require('koa-helmet')
const koaJwt = require('koa-jwt')

const { publicDir } = require('./conf/constant')
const { JWT_SECRET_KEY } = require('./conf/secretKeys')


// 路由
const publicRouter = require('./routes/public')
const privateRouter = require('./routes/private')
const blogAPIRouter = require('./routes/blog')

const { loggerMiddleware } = require('./middlewares/logger')
const { errorHandler, responseHandler } = require('./middlewares/response')
const { corsHandler } = require('./middlewares/cors')

const app = new Koa()
// Logger
app.use(loggerMiddleware)

// error handler
app.use(errorHandler)

// global middlewares
app.use(bodyParser)
app.use(staticCache(publicDir))

// Helmet
app.use(helmet())

// cors
app.use(cors(corsHandler))

// unless the URL starts with '/api/public'
app.use(koaJwt({ secret: JWT_SECRET_KEY }).unless({ path: [/^\/api\/public/] }))

// Routes
// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
app.use(publicRouter.routes(), publicRouter.allowedMethods())
app.use(privateRouter.routes(), privateRouter.allowedMethods())
app.use(blogAPIRouter.routes(), blogAPIRouter.allowedMethods())

// response
app.use(responseHandler)

module.exports = app