const { modalCreateNewIssue, blockListAllIssues } = require('../block-kit');
const { getAllIssues } = require('../services/api');

function initCommands(app) {
  app.command('/inner', async ({ ack, client, command, body, say }) => {
    try {
      if (command.text === 'issues --new') {
        await ack();
        // const requesterData = {
        //   user_id: command.user_id,
        //   user_name: command.user_name,
        //   channel_id: command.channel_id,
        //   channel_name: command.channel_name
        // };

        // console.log('RESULT', requesterData);
        await modalCreateNewIssue(client, body);
      }

      if (command.text === 'issues --list') {
        await ack();
        const repositoryIssues = await getAllIssues();
        const commandResponse = await blockListAllIssues(repositoryIssues);
        await say(commandResponse);
      }
    } catch (error) {
      console.error('ERROR:', error);
    }
  });
}

module.exports = {
  initCommands
};
