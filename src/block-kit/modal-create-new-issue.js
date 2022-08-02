const getLabelOption = (label) => {
  return {
    text: {
      type: 'plain_text',
      text: `${label.name}`
    },
    value: `${label.name}`
  };
};

async function modalCreateNewIssue(client, body, repositoryLabels) {
  const labelsOptions = repositoryLabels.map((label) => getLabelOption(label));

  await client.views.open({
    trigger_id: body.trigger_id,
    view: {
      type: 'modal',
      callback_id: 'create_new_issue',
      title: {
        type: 'plain_text',
        text: 'Inner Support',
        emoji: true
      },
      submit: {
        type: 'plain_text',
        text: 'Criar',
        emoji: true
      },
      close: {
        type: 'plain_text',
        text: 'Cancelar',
        emoji: true
      },
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: 'Criar uma nova issue',
            emoji: true
          }
        },
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: 'Fala User! Gostaríamos de saber como podemos te ajudar hoje.',
            emoji: true
          }
        },
        {
          type: 'divider'
        },
        {
          block_id: 'issueTitle',
          type: 'input',
          hint: {
            type: 'plain_text',
            text: 'Ex: Não consigo acessar a plataforma',
            emoji: true
          },
          element: {
            action_id: 'data',
            type: 'plain_text_input',
            placeholder: {
              type: 'plain_text',
              text: ' ',
              emoji: true
            }
          },
          label: {
            type: 'plain_text',
            text: 'Insira um Título para a sua issue:',
            emoji: true
          }
        },
        {
          block_id: 'issueDescription',
          type: 'input',
          hint: {
            type: 'plain_text',
            text: 'Ex: Quando clico no botão de login',
            emoji: true
          },
          element: {
            action_id: 'data',
            type: 'plain_text_input',
            placeholder: {
              type: 'plain_text',
              text: ' ',
              emoji: true
            }
          },
          label: {
            type: 'plain_text',
            text: 'Insira uma Descrição para a sua issue:',
            emoji: true
          }
        },
        {
          block_id: 'issueLabels',
          type: 'input',
          label: {
            type: 'plain_text',
            text: 'Selecione uma Label para a sua issue:'
          },
          hint: {
            type: 'plain_text',
            text: 'Ex: bug, documentação, melhoria',
            emoji: true
          },
          element: {
            type: 'multi_static_select',
            placeholder: {
              type: 'plain_text',
              text: ' '
            },
            initial_options: [
              {
                text: {
                  text: 'bug',
                  type: 'plain_text'
                },
                value: 'bug'
              }
            ],
            options: labelsOptions,
            action_id: 'data'
          }
        }
      ]
    }
  });
}

module.exports = {
  modalCreateNewIssue
};
