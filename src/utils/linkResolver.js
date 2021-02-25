// -- The Link Resolver
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes

const linkResolver = (doc) => {
  switch (doc.type) {
    case 'post':
      return `/blog/${doc.uid}`
    case 'flexible_content':
      return `/${doc.uid}`
    default:
      return '/'
  }
}

module.exports = linkResolver
