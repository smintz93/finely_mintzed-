import React from 'react';
import { FaForward } from "react-icons/fa";


const NextArrow = ({ nextImage }) => (
  <div onClick={nextImage} style={{ fontSize: "2em", marginRight: "12px", padding: '10px' }}>
    <FaForward />
  </div>
)

export default NextArrow;