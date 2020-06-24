import React from "react"
import { Link } from "gatsby"
import  "./mainImages.css"
import imageOne from "../../images/paleocookies.jpg"
import imageTwo from "../../images/frittata.jpg"
import imageThree from "../../images/cookiedough.jpg"
import imageFour from "../../images/almondchicken.jpg"
import imageFive from "../../images/salmon.jpg"

const mainImages = () => (
  <div className="imageContainer">
    <div className="imagesWrap">
      <img src={imageOne} alt="picture1" />
      <div class='description'>
        <p><Link to={"/paleochocolatechipcookies"}>Paleo Cookies</Link></p>
      </div>
    </div>
    <div className="imagesWrap">
      <img src={imageTwo} alt="picture2" />
      <div class='description'>
        <p><Link to={"/paleofrittata"}>Frittata</Link></p>
      </div>
    </div>
    <div className="imagesWrap">
      <img src={imageThree} alt="picture3" />
      <div class='description'>
        <p><Link to={"/cookiedoughbar"}>Cookie Dough Bars</Link></p>
      </div>
    </div>
    <div className="imagesWrap">
      <img src={imageFour} alt="picture4" />
      <div class='description'>
        <p><Link to={"/almondchicken"}>Almond Chicken</Link></p>
      </div>
    </div>
    <div className="imagesWrap">
      <img src={imageFive} alt="picture5" />
      <div class='description'>
        <p><Link to={"/salmon"}>Salmon and Asparagus</Link></p>
      </div>
    </div>
  </div>
)

export default mainImages;