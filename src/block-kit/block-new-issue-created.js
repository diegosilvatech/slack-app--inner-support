const blockNewIssueCreated = (issue) => {
  const { data } = issue;
  const { title, body, labels, state, html_url } = data;

  return [
    {
      type: 'context',
      elements: [
        {
          type: 'plain_text',
          text: `Uma nova ISSUE foi criada: ${title}`,
          emoji: false
        }
      ]
    },
    {
      type: 'divider'
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: '*TÍTULO*\nTITLE'
        },
        {
          type: 'mrkdwn',
          text: '*SITUAÇÃO*\nSTATE'
        }
      ]
    }
  ];
};

module.exports = {
  blockNewIssueCreated
};
