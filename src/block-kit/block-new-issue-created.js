const blockNewIssueCreated = (issue, user) => {
  const { data } = issue;
  const { title, body, state, labels, html_url } = data;

  return [
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `Uma nova ISSUE foi criada por com as seguintes categorias: ${[
            ...labels.map((label) => label.name)
          ]}`
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
          text: `*SOLICITANTE*\n<@${user.user_id}|${user.name}>`
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
