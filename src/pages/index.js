import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainImages from "../components/MainImages/mainImages"
import MainAbout from "../components/MainAbout/mainAbout"
import Image from "../components/image"
import SEO from "../components/seo"
import Instagram from "./instagram"
import "./about.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1 class='welcome' style={{marginBottom: '45x'}}>Welcome to Finely Mintzed</h1> */}
    <div
      style={
        {
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'space-around'
        }
      }
    >
      <MainImages />
      <MainAbout />
      <div style={{ marginBottom: `1.45rem` }}>
        <Instagram />
        {/* <Image /> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
