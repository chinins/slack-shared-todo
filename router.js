const router = require('koa-router')();

const authMiddleware = require('./middlewares/verification');
const threadFilterMiddleware = require('./middlewares/thread-filer');
const commands = require('./controllers/commandsController');
const events = require('./controllers/eventsController');

router.post('/commands', authMiddleware, commands.postTodoItem);
router.post('/events', authMiddleware, threadFilterMiddleware, events.postEvent);

module.exports = router;
