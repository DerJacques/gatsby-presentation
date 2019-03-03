// index.js

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.frontmatter.path}>
          <Link to={node.frontmatter.path}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
        </div>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
