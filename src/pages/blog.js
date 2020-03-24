import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { graphql } from "gatsby";


const BlogPage = ({data}) => (
  <Layout>
    <div style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
         }}>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map((post) =>  (
      <div key={ post.node.id }>
        <h3>{post.node.frontmatter.title}</h3>
        <small>posted by: {post.node.frontmatter.author}
        </small>
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
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




export default BlogPage;


