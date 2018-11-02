const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

const router = require('./router');
const errorHandler = require('./middlewares/error-handler');

const app = new Koa();

app.use(logger())
  .use(bodyParser())
  .use(errorHandler)
  .use(router.allowedMethods())
  .use(router.routes());

const port = process.env.PORT || 3005;

// eslint-disable-next-line
app.listen(port, () => console.log(`Server listening on port ${port}`));

