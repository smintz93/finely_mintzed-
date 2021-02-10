/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "./menu"
import SideBar from "./SideBar/sidebar"
import "./layout.css"
import sideBar from "./SideBar/sidebar"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu />
      {/* <SideBar /> */}
      <div
      // style={{
      //   margin: `0 auto`,
      //   // maxWidth: 960,
      //   padding: `0px 1.0875rem 1.45rem`,
      //   paddingTop: 0,
      // }}
      >
        <main>{children}</main>
      </div>
      <footer style={{ color: "rgba(213, 184, 255, 1);" }}>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a
          style={{ color: "rgba(213, 184, 255, 1);" }}
          href="https://www.sammintz.co"
        >
          Sam Mintz
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
