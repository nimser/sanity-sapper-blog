export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc63e250da67939763d0e75',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-d76yxjad',
                  apiId: 'a0763d8c-be70-4639-bac7-d5d154f918fa'
                },
                {
                  buildHookId: '5fc63e25e7f12321faf5939e',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-m55yh5cc',
                  apiId: '381cbad3-b711-4e07-8422-b84c2072927f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nimser/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-m55yh5cc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
