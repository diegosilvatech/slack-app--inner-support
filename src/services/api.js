const axios = require('axios');

require('dotenv').config();

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.GITHUB_PERSONAL_PERSONAL_ACCESS_TOKEN_SUPPORT}`
  }
});

async function getRepositoryIssues() {
  try {
    const repositoryUrl = `/repos/${process.env.GITHUB_REPO_NAME}/issues`;
    const issues = await api.get(repositoryUrl);

    return issues.data;
  } catch (error) {
    console.log('ERROR:', error);
  }
}

module.exports = {
  getRepositoryIssues
};
