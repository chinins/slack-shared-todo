const router = require('koa-router')();

const authMiddleware = require('./middlewares/verification');
const commands = require('./controllers/commandsController');
const events = require('./controllers/eventsController');

router.post('/commands', authMiddleware, commands.postTodoItem);
router.post('/events', authMiddleware, events.postEvent);

module.exports = router;
