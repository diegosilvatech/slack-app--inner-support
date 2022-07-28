const { App } = require('@slack/bolt');
const { initCommands, initActions, initViews } = require('./features');

require('dotenv').config();

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_LEVEL_TOKEN,
  token: process.env.SLACK_BOT_OAUTH_TOKEN,
  socketMode: true
});

initCommands(app);
initActions(app);
initViews(app);

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();
