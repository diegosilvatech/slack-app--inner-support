const { getFieldDataValue } = require('../helpers/getFieldValue');

function initViews(app) {
  app.view('create_new_issue', async ({ view }) => {
    try {
      const { repositoryName, issueTitle, issueDescription, issueLabel } =
        view.state.values;

      console.log('TEST_REPOSITORY_NAME:', getFieldDataValue(repositoryName));
      console.log('TEST_ISSUE_TITLE:', getFieldDataValue(issueTitle));
      console.log(
        'TEST_ISSUE_DESCRIPTION:',
        getFieldDataValue(issueDescription)
      );
      console.log('TEST_ISSUE_LABEL:', getFieldDataValue(issueLabel));
    } catch (error) {
      console.log('ERROR:', error);
    }
  });
}

module.exports = {
  initViews
};
