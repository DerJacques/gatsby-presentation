import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <div key={node.contentful_id}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
          <Img fluid={node.heroImage.fluid} />
          <p>{node.description.description}</p>
        </div>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          author {
            name
            email
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          description {
            description
          }
          heroImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          contentful_id
          body {
            childMarkdownRemark {
              timeToRead
              html
            }
          }
        }
      }
      totalCount
    }
  }
`
