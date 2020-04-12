import React from 'react';
import { FaArrowLeft } from "react-icons/fa";

const BackArrow = ({ previousImage }) => (
  <div onClick={previousImage} style={{ fontSize: "2em", marginRight: "12px" }}>
    <FaArrowLeft />
  </div>
)

export default BackArrow;