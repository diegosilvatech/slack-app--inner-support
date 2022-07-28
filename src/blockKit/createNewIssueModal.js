async function createNewIssueModal(client, body) {
  await client.views.open({
    trigger_id: body.trigger_id,
    view: {
      type: 'modal',
      callback_id: 'create_new_issue',
      title: {
        type: 'plain_text',
        text: 'HAHA Support Backlog',
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
          block_id: 'repositoryName',
          type: 'input',
          label: {
            type: 'plain_text',
            text: 'Selecione o repositório para o qual você deseja suporte:',
            emoji: true
          },
          element: {
            action_id: 'data',
            type: 'static_select',
            initial_option: {
              text: {
                type: 'plain_text',
                text: 'slack-app_support-backlog',
                emoji: true
              },
              value: 'slack-app_support-backlog'
            },
            placeholder: {
              type: 'plain_text',
              text: 'Ex: slack-app_support-backlog',
              emoji: true
            },
            options: [
              {
                text: {
                  type: 'plain_text',
                  text: 'slack-app_support-backlog',
                  emoji: true
                },
                value: 'slack-app_support-backlog'
              }
            ]
          }
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
          block_id: 'issueLabel',
          type: 'input',
          hint: {
            type: 'plain_text',
            text: 'Ex: bug, documentação, melhoria',
            emoji: true
          },
          label: {
            type: 'plain_text',
            text: 'Selecione uma Label para a sua issue:',
            emoji: true
          },
          element: {
            action_id: 'data',
            type: 'static_select',
            placeholder: {
              type: 'plain_text',
              text: ' ',
              emoji: true
            },
            options: [
              {
                text: {
                  type: 'plain_text',
                  text: 'bug',
                  emoji: true
                },
                value: 'bug'
              },
              {
                text: {
                  type: 'plain_text',
                  text: 'documentação',
                  emoji: true
                },
                value: 'documentation'
              }
            ]
          }
        }
      ]
    }
  });
}

module.exports = {
  createNewIssueModal
};
