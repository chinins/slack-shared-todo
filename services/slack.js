const { WebClient } = require('@slack/client');

const token = process.env.slack_app_token;
const web = new WebClient(token);

exports.postToSlack = (channel, text) => web.chat.postMessage({ channel, text })
  .then(res => res)
  .catch(err => err.data);

exports.pinMessage = messageResponse => web.pins.add({
  channel: messageResponse.channel,
  timestamp: messageResponse.ts,
}).then(res => res)
  .catch(err => err.data);

exports.findMessageByTimestamp = (timestamp, channel) => web.channels.history({
  channel,
  count: 1,
  latest: timestamp,
  inclusive: true,
}).then(res => res)
  .catch(err => err.data);
