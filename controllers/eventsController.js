const slackService = require('../services/slack');

exports.postEvent = async (ctx) => {
  const { channel } = process.env;
  const { event } = ctx.request.body;
  // TODO response status is always shows as 404 - fix it
  ctx.status = 200;
  ctx.body = event.challenge;
  const initialPost = await slackService.findMessageByTimestamp(event.thread_ts, channel);
  let initialText = initialPost.messages[0].text;
  const user = await slackService.getUser(event.user);

  if (event.text.includes('progress')) {
    if (initialText.includes('is')) [initialText] = initialText.split(' is');
    await slackService.chatUpdate(channel, `${initialText} is in progress by user ${user}`, event.thread_ts);
    ctx.body = 'Slash command completed.';
    ctx.status = 200;
  } else if (event.text.includes('done')) {
    if (initialText.includes('is')) [initialText] = initialText.split(' is');
    await slackService.chatUpdate(channel, `${initialText} is done by user ${user}`, event.thread_ts);
    ctx.body = 'Slash command completed.';
    ctx.status = 200;
  }
};
