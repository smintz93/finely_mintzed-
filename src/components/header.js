import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/finelymintzed_logo.png';
import Logo1 from '../images/finelymintzed_logo.jpg';
import Logo2 from '../images/finelymintzed_logo_1.png';


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
          <img src={Logo}/>
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
