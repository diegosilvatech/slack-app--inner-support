const { getFieldDataValue } = require('../helpers/getFieldValue');
const { createNewRepositoryIssue } = require('../services/api');

function initViews(app) {
  app.view('create_new_issue', async ({ view }) => {
    try {
      const { repositoryName, issueTitle, issueDescription, issueLabel } =
        view.state.values;

      await createNewRepositoryIssue(issueTitle, issueDescription, [
        issueLabel
      ]);

      const issue = await createNewRepositoryIssue(
        getFieldDataValue(issueTitle),
        getFieldDataValue(issueDescription),
        [getFieldDataValue(issueLabel)]
      );
    } catch (error) {
      console.log('ERROR:', error);
    }
  });
}

module.exports = {
  initViews
};
