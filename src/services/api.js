const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.GITHUB_PERSONAL_PERSONAL_ACCESS_TOKEN_SUPPORT}`
  }
});

async function getGithubRepoIssues() {
  try {
    const issues = await api.get(
      `/repos/${process.env.GITHUB_REPO_NAME}/issues`
    );
    return issues.data;
  } catch (error) {
    console.log('ERROR');
  }
}

module.exports = {
  getGithubRepoIssues
};
