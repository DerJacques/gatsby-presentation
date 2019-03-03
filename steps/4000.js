// /src/templates/blog-post.js

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.contentfulBlogPost
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <p>By {post.author.name}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(contentful_id: { eq: $id }) {
      title
      slug
      author {
        name
        email
      }
      id
      body {
        childMarkdownRemark {
          timeToRead
          html
        }
      }
    }
  }
`
