import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Instagram from "./instagram"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the Finely Mintzed Blog</h1>
    <p>Website construction underway...</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>


    
    <Instagram />
      {/* <Image /> */}
    </div>

    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
