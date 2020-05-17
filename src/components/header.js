import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/finelymintzed_logo.png';
import LogoSmall from '../images/logo_smaller.png';


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        textAlign: `center`
      }}
    >
        <Link className='testLink' to="/">
        <img src={LogoSmall}/>
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
