const getIssueSection = (issue) => {
  return {
    type: 'section',
    fields: [
      {
        type: 'mrkdwn',
        text: `*Título:*\n${issue.title}`
      },
      {
        type: 'mrkdwn',
        text: `*Situação:*\n${issue.state}`
      },
      {
        type: 'mrkdwn',
        text: `*Solicitante:*\n${issue.user.login}`
      },
      {
        type: 'mrkdwn',
        text: `*Descrição:*\n${issue.body}`
      }
    ]
  };
};

const listAllIssues = async (issues, say) => {
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

    text: `issues --list`
  };

  await say(response);
};

module.exports = {
  listAllIssues
};
