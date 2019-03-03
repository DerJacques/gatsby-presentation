// Graphql

{
  allContentfulBlogPost {
    edges {
      node {
        title
        slug
        contentful_id
        author {
          name
          email
        }
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
