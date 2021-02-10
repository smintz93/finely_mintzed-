import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostPreview from "../templates/post-preview"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import { node } from "prop-types"
import { faNotEqual } from "@fortawesome/free-solid-svg-icons"

const searchClient = algoliasearch(
  "319VB9IBNV",
  "9d5369bf5f5a47df74cad2a0f25b0dff"
)

const BlogPage = ({ data }) => (
  <Layout>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <h1>Recipes</h1>
      <InstantSearch searchClient={searchClient} indexName="FinelyMintzSearch">
        <SearchBox />
        <Hits hitComponent={PostPreview} />
      </InstantSearch>

      {/* {data.allMarkdownRemark.edges.map(post => (
        // <PostPreview
        //   key={post.node.id}
        //   title={post.node.frontmatter.title}
        //   date={post.node.frontmatter.date}
        //   path={post.node.frontmatter.path}
        // />
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>posted by: {post.node.frontmatter.author}</small>
          <br />
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))} */}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
