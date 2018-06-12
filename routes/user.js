const Router = require('koa-router')
const UserController = require('../controllers/user')
const router = new Router({
  prefix: '/api'
})

router
  .post('/login', UserController.postLogin)  // 登录
  .post('/createUser', UserController.createUser) // 注册
  .get('/userInfo', UserController.getUserName) // 获取用户信息

module.exports = router
