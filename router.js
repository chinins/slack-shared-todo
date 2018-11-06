const router = require('koa-router')();

const authMiddleware = require('./middlewares/verification');
const todo = require('./controllers/todoController');

router.post('/commands', authMiddleware, todo.postTodoItem);

module.exports = router;
