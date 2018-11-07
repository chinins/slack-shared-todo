const slackService = require('../services/slack');

const { channel } = process.env;
const treadFilter = async (ctx, next) => {
  const { body } = ctx.request;
  if (body.event.thread_ts && body.event.channel === channel) {
    const message = await slackService.findMessageByTimestamp(body.event.thread_ts, channel);
    if (message.messages[0].bot_id === process.env.bot_id) next();
  }
};

module.exports = treadFilter;
