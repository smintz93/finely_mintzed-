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
        <ul>
          <li>{post.frontmatter.recipe}</li>
        </ul>

        <ul>
          <li>{post.frontmatter.instructions}</li>
        </ul>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* this should be markdown file?? */}
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
               recipe
               instructions
               image
               date
             }
           }
         }
       `