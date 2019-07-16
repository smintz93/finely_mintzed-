import React from 'react';
import { FaBackward } from "react-icons/fa";

const BackArrow = ({ previousImage }) => (
  <div onClick={previousImage} style={{ fontSize: "2em", marginRight: "12px" }}>
    <FaBackward />
  </div>
)

export default BackArrow;