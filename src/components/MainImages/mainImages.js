import React from "react"
import { Link } from "gatsby"
import  "./mainImages.css"
import imageOne from "../../images/imageOne.png"
import imageTwo from "../../images/imageTwo.png"
import imageThree from "../../images/imageThree.png"

const mainImages = () => (
  <div style={{ maxWidth: 960}} className="imageContainer">
    <div className="imagesWrap">
      <img src={imageOne} alt="picture1" />
      <div class='description'>
        <p><Link to={"/CauliflowerGnocchi"}>Cauliflower Gnocchi</Link></p>
      </div>
    </div>
    <div className="imagesWrap">
      <img src={imageTwo} alt="picture2" />
      <div class='description'>
        <p><Link to={"/TurkeyTacoBowl"}>Turkey Taco Bowl</Link></p>
    
      </div>
    </div>
    <div className="imagesWrap">
      <img src={imageThree} alt="picture3" />
      <div class='description'>
        <p><Link to={"/recipe6"}>Chocolate Chip Tahini Cake</Link></p>
      </div>
    </div>
  </div>
)

export default mainImages;