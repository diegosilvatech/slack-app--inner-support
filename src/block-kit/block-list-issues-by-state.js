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
        text: `*SOLICITANTE*\n<${issue.user.html_url}|@${issue.user.login}>`
      },
      {
        type: 'mrkdwn',
        text: `*DESCRIÇÃO*\n${issue.body}`
      }
    ]
  };
};

const blockListIssuesByState = async (issues, state) => {
  const { total_count, items } = issues;

  const issuesSections = items.map((issue) => getIssueSection(issue));

  const newIssuesSections = [];

  for (let i = 0; i < issuesSections.length; i++) {
    newIssuesSections.push(issuesSections[i]);
    newIssuesSections.push({
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `Link da issue: <${items[i].html_url}|${items[i].title}>`
        }
      ]
    });
  }

  const response = {
    blocks: [
      {
        type: 'divider'
      },
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: `Foram encontradas ${total_count} issues com a situação: ${state}`,
            emoji: false
          }
        ]
      },
      ...newIssuesSections,
      {
        type: 'divider'
      }
    ],
    text: 'issues --list'
  };

  return response;
};

module.exports = {
  blockListIssuesByState
};
