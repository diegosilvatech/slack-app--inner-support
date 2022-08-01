const { getFieldDataValue } = require('../helpers/get-field-value');
const { createNewIssue, notifyNewIssueCreated } = require('../services/api');
const { blockNewIssueCreated } = require('../block-kit');

function initViews(app) {
  app.view('create_new_issue', async ({ view }) => {
    try {
      const { issueTitle, issueDescription, issueLabel } = view.state.values;

      const issue = await createNewIssue(
        getFieldDataValue(issueTitle),
        getFieldDataValue(issueDescription),
        [getFieldDataValue(issueLabel)]
      );

      await notifyNewIssueCreated('TEXTO', blockNewIssueCreated(issue));
    } catch (error) {
      console.log('ERROR:', error.code);
    }
  });
}

module.exports = {
  initViews
};
