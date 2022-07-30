const { createNewIssue, listAllIssues } = require('../block-kit');
const { getRepositoryIssues } = require('../services/api');

function initCommands(app) {
  app.command('/inner', async ({ ack, client, command, body, say }) => {
    try {
      if (command.text === 'issues --new') {
        await ack();
        await createNewIssue(client, body);
      }

      if (command.text === 'issues --list') {
        await ack();
        const repositoryIssues = await getRepositoryIssues();
        const commandResponse = await listAllIssues(repositoryIssues);
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
