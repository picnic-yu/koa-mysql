const Router = require('koa-router')
const ListController = require('../controllers/list')
const router = new Router({
  prefix: '/api'
})

router
  .get('/user/getTodoList', ListController.getTodoList) // 获取list
  .post('/user/todoList', ListController.createTodoList)  // 创建list
  .post('/user/DestroyTodoList', ListController.destroyTodoList)  // 删除list
  .post('/user/updateTodoList', ListController.updateTodoList)  // 更新list

module.exports = router
