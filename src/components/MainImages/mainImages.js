import React from "react"
import { Link } from "gatsby"
import  "./mainImages.css"
import imageOne from "../../images/imageOne.png"
import imageTwo from "../../images/imageTwo.png"
import imageThree from "../../images/imageThree.png"


const mainImages = () => (
  <div className="imageContainer">
    <div className="images">
      <img src={imageOne} alt="picture1" />
      <h2>
        <Link to={"/post-two"}>Recipe</Link>
      </h2>
    </div>
    <div className="images">
      <img src={imageTwo} alt="picture2" />
      
    </div>
    <div className="images">
      <img src={imageThree} alt="picture3" />
      
    </div>
  </div>
)

export default mainImages;