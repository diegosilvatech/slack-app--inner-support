const { getFieldDataValue } = require('../helpers/get-field-value');
const { createNewIssue, notifyNewIssueCreated } = require('../services/api');
const { blockNewIssueCreated } = require('../block-kit');

function initViews(app) {
  app.view('create_new_issue', async ({ view, body }) => {
    try {
      const { issueTitle, issueDescription, issueLabel } = view.state.values;

      const issue = await createNewIssue(
        getFieldDataValue(issueTitle),
        getFieldDataValue(issueDescription),
        [getFieldDataValue(issueLabel)]
      );

      const user = {
        user_id: body.user.id,
        username: body.user.username,
        name: body.user.name,
        team_id: body.user.team_id
      };

      await notifyNewIssueCreated('TEXTO', blockNewIssueCreated(issue, user));
    } catch (error) {
      console.error('ERROR:', error.code);
    }
  });
}

module.exports = {
  initViews
};
