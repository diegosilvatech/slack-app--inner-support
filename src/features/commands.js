const { modalCreateNewIssue, blockListAllIssues } = require('../block-kit');
const { getAllIssues } = require('../services/api');

function initCommands(app) {
  app.command('/inner', async ({ ack, client, command, body, say }) => {
    try {
      if (command.text === 'issues --new') {
        await ack();
        await modalCreateNewIssue(client, body);
      }

      if (command.text === 'issues --list') {
        await ack();
        const repositoryIssues = await getAllIssues();
        const commandResponse = await blockListAllIssues(repositoryIssues);
        await say(commandResponse);
      }
    } catch (error) {
      console.log('ERROR:', error);
    }
  });
}

module.exports = {
  initCommands
};
