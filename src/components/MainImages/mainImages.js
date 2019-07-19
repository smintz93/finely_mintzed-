import React from "react"
import { Link } from "gatsby"
import  "./mainImages.css";

const mainImages = () => (
  <div className="imageContainer">
    <div className="images">
      <img src="" alt="picture1" />
      <h2>
        <Link to={"/post-two"}>Recipe</Link>
      </h2>
    </div>
    <div className="images">
      <img src="" alt="picture2" />
      <Link />
    </div>
    <div className="images">
      <img src="" alt="picture3" />
      <Link />
    </div>
  </div>
)

export default mainImages;