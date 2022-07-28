const { createNewIssueModal } = require('../blockKit');

function initCommands(app) {
  app.command('/inner', async ({ ack, client, command, body }) => {
    try {
      if (command.text === 'issues --new') {
        await ack();
        await createNewIssueModal(client, body);
      }
    } catch (error) {
      console.log('ERROR:', error);
    }
  });
}

module.exports = {
  initCommands
};
