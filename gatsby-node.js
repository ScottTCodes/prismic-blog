const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPost {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `)

  const flexible = await graphql(`
    {
      allPrismicFlexibleContent {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `)

  pages.data.allPrismicPost.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/post.js'),
      context: { ...page },
    })
  })

  flexible.data.allPrismicFlexibleContent.nodes.forEach((page) => {
    console.log(page)
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/flexiblecontent.js'),
      context: { ...page },
    })
  })
}
