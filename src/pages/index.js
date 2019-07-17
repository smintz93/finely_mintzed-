import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainImages from "../components/MainImages/mainImages"
import MainAbout from "../components/MainAbout/mainAbout";
import Image from "../components/image"
import SEO from "../components/seo"
import Instagram from "./instagram"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the Finely Mintzed Blog</h1>
    <p>Website construction underway...</p>
    <div >
      <MainImages />
      <MainAbout />
      <div style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
        <Instagram />
        {/* <Image /> */}
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
