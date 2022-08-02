const axios = require('axios');

require('dotenv').config();

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.GITHUB_PERSONAL_PERSONAL_ACCESS_TOKEN_SUPPORT}`
  }
});

const slackApi = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

async function getAllIssues() {
  try {
    const repositoryUrl = `/repos/${process.env.GITHUB_REPO_NAME}/issues`;
    const issues = await githubApi.get(repositoryUrl);

    return issues.data;
  } catch (error) {
    console.error('ERROR:', error);
  }
}

async function getIssuesByState(state = 'open') {
  try {
    const searchUrl = `/search/issues?q=is:issue%20repo:${process.env.GITHUB_REPO_NAME}%20state:${state}`;
    const issues = await githubApi.get(searchUrl);

    return issues.data;
  } catch (error) {
    console.error('ERROR:', error);
  }
}

async function createNewIssue(issueTitle, issueBody, issueLabels) {
  try {
    const repositoryUrl = `/repos/${process.env.GITHUB_REPO_NAME}/issues`;
    const issue = await githubApi.post(
      repositoryUrl,
      {
        title: issueTitle,
        body: issueBody,
        labels: issueLabels
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return issue;
  } catch (error) {
    console.error('ERROR:', error);
  }
}

async function notifyNewIssueCreated(text, blocks) {
  try {
    const webhookUrl = process.env.INNER_SUPPORT_TEAM_SLACK_CHANNEL_WEBHOOK;
    const payload = {
      text: text,
      blocks: blocks
    };
    const response = await slackApi.post(webhookUrl, payload);
    return response;
  } catch (error) {
    console.error('ERROR:', error.code);
  }
}

module.exports = {
  getAllIssues,
  createNewIssue,
  getIssuesByState,
  notifyNewIssueCreated
};
