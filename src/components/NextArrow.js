import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const NextArrow = ({ nextImage }) => (
  <div onClick={nextImage} style={{ fontSize: "2em", marginRight: "12px", padding: '10px' }}>
    <FaArrowRight />
  </div>
)

export default NextArrow;