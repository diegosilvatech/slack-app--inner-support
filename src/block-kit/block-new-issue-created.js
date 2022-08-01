const blockNewIssueCreated = (issue) => {
  const { data } = issue;
  const { title, body, labels, state, html_url, user } = data;

  return [
    {
      type: 'context',
      elements: [
        {
          type: 'plain_text',
          text: `Uma nova ISSUE foi criada:`,
          emoji: false
        }
      ]
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*TÍTULO*\n${title}`
        },
        {
          type: 'mrkdwn',
          text: `*SITUAÇÃO*\n${state}`
        },
        {
          type: 'mrkdwn',
          text: `*DESCRIÇÃO*\n${body}`
        },
        {
          type: 'mrkdwn',
          text: `*SOLICITANTE*\n${user.login}`
        }
      ]
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `Link da issue: <${html_url}|${title}>`
        }
      ]
    },
    {
      type: 'divider'
    }
  ];
};

module.exports = {
  blockNewIssueCreated
};
