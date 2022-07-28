const { createNewIssueModal } = require('../blockKit');

function initActions(app) {
  app.action('create_new_issue_event', async ({ ack, body, client }) => {
    await ack();
    await client.views.open({
      trigger_id: body.trigger_id,
      view: createNewIssueModal(client, body)
    });
  });
}

module.exports = {
  initActions
};
