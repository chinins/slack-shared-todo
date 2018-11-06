const { channel } = process.env;
const slackService = require('../services/slack');

exports.postTodoItem = async (ctx) => {
  const res = await slackService.postToSlack(channel, ctx.request.body.text);
  if (res.ok === true) {
    const result = await slackService.pinMessage(res);
    if (res.ok === true) {
      ctx.body = 'Slash command completed.';
      ctx.status = 200;
    } else {
    // TODO: error message not working, fix it
      ctx.body = result.error;
      ctx.status = 503;
    }
  } else {
    // TODO: error message not working, fix it
    ctx.body = res.error;
    ctx.status = 400;
  }
};
