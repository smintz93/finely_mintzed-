import React from "react"
import "./mainAbout.css"
// import JoBioPic from '../../images/JohannaBio.jpeg';
import JoBioPic from '../../images/jo_other_bio.jpg';

const mainAbout = () => (
  <div className="aboutContainer">
    <div class='aboutWrapper' style={{padding: '30px'}}>
    <div className="bio">
      <h3>Hi, I’m Johanna!</h3> 
      <p>Welcome to finelymintzed where you can find healthy,
      easy, (mostly) paleo recipes.  I hope after taking a peak around finelymintzed you realize how fun and easy it is to make simple, delicious, and healthy meals (and desserts) and feel inspired to get cooking! I hope you enjoy!
      </p>
    </div>
    <div className="JoPic">
      <img className="JoBioPic" src={JoBioPic} />
    </div>
    </div>
  </div>
)
export default mainAbout;