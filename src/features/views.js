const { getFieldDataValue } = require('../helpers/get-field-value');
const { postCreateNewRepositoryIssue } = require('../services/api');

function initViews(app) {
  app.view('create_new_issue', async ({ view }) => {
    try {
      const { repositoryName, issueTitle, issueDescription, issueLabel } =
        view.state.values;

      await postCreateNewRepositoryIssue(
        getFieldDataValue(issueTitle),
        getFieldDataValue(issueDescription),
        [getFieldDataValue(issueLabel)]
      );

      await console.log('issue created!');
    } catch (error) {
      console.log('ERROR:', error);
    }
  });
}

module.exports = {
  initViews
};
