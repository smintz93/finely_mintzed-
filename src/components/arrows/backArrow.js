import React from 'react';

// import { faHome } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaBackward } from "react-icons/fa"


const BackArrow = () => (
  <div style={{ fontSize: "2em", marginRight: "12px" }}>
    {/* { <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i> */}
    {/* <FontAwesomeIcon icon={faHome} />  */}
  
     <FaBackward />
    
  </div>
)

export default BackArrow;