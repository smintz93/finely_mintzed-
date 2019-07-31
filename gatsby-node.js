const path = require('path');

require("dotenv").config({
  path: `.env.${process.env.GATSBY_INSTAGRAM_API_KEY}`,
})

// registers our post so we can use those urls
// using createPages API from gatsby
exports.createPages = ({boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve('src/templates/blog-post.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              author
              recipe
              instructions
              image
              date
            }
          }
        }
      }
    }
  `).then(response => {
    if (response.errors) {
      return Promise.reject(response.errors)
    }
    response.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}