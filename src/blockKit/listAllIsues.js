const getIssueSection = (issue) => {
  return {
    type: 'section',
    fields: [
      {
        type: 'mrkdwn',
        text: `*TÍTULO*\n${issue.title}`
      },
      {
        type: 'mrkdwn',
        text: `*SITUAÇÃO*\n${issue.state}`
      },
      {
        type: 'mrkdwn',
        text: `*SOLICITANTE:*\n${issue.user.login}`
      },
      {
        type: 'mrkdwn',
        text: `*DESCRIÇÃO*\n${issue.body}`
      }
    ]
  };
};

const listAllIssues = async (issues) => {
  const getIssuesSections = (issues) => {
    return issues.map((issue) => getIssueSection(issue));
  };

  const issuesSections = await getIssuesSections(issues);

  const newIssuesSections = [];
  for (let i = 0; i < issuesSections.length; i++) {
    newIssuesSections.push(issuesSections[i]);
    newIssuesSections.push({
      type: 'divider'
    });
  }

  const response = {
    blocks: [
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: 'Segue abaixo a LISTA de todas as issues:',
            emoji: false
          }
        ]
      },
      {
        type: 'divider'
      },
      ...newIssuesSections
    ],
    text: 'issues --list'
  };

  return response;
};

module.exports = {
  listAllIssues
};
