const {
  modalCreateNewIssue,
  blockListAllIssues,
  blockListIssuesByState
} = require('../block-kit');
const { getAllIssues, getIssuesByState } = require('../services/api');

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

      if (command.text === 'issues --list open') {
        await ack();
        const openedIssues = await getIssuesByState('open');
        const commandResponse = await blockListIssuesByState(
          openedIssues,
          'open'
        );
        await say(commandResponse);
      }

      if (command.text === 'issues --list closed') {
        await ack();
        const openedIssues = await getIssuesByState('closed');
        const commandResponse = await blockListIssuesByState(
          openedIssues,
          'closed'
        );
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
