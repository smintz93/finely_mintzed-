import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ hit }) => {
  console.log(hit, "This is hit")
  console.log(hit.frontmatter.title, "this is hit")
  return (
    <div style={{ padding: "20px 0px" }}>
      <h3 style={{}}>{hit.frontmatter.title}</h3>
      <small>{hit.frontmatter.date}</small>
      <br />
      {<Link to={hit.frontmatter.path}>Read More</Link>}
      <br />
    </div>
  )
}

export default PostPreview
