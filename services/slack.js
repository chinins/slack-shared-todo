const { WebClient } = require('@slack/client');

const token = process.env.slack_app_token;
const web = new WebClient(token);

exports.postToSlack = (channel, text) => web.chat.postMessage({ channel, text })
  .then(res => res)
  .catch(err => err.data);
