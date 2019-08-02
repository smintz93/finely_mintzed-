import React from 'react';
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';

export default function Template({data}) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <Link to="/blog">Go Back</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h6>
          Posted by: {post.frontmatter.author} on {post.frontmatter.date}
        </h6>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <h3>image</h3>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
         query BlogPostByPath($path: String!) {
           markdownRemark(frontmatter: { path: { eq: $path } }) {
             html
             frontmatter {
               path
               title
               author
               image
               date
             }
           }
         }
       `