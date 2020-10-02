import React from "react"
import { Link } from "gatsby"
import "./mainImages.css"
import imageOne from "../../images/paleocookies.jpg"
import imageTwo from "../../images/paleopasta.jpg"
import imageThree from "../../images/cookiedough.jpg"
import imageFour from "../../images/smoothiebowl.jpg"
import imageFive from "../../images/brownies.jpg"

const mainImages = () => (
  <div className="imageContainer">
    <div className="imagesWrap">
      <img src={imageOne} alt="picture1" />
      <div class="description">
        <p>
          <Link to={"/paleochocolatechipcookies"}>Paleo Cookies</Link>
        </p>
      </div>
    </div>
    <div className="imagesWrap">
      <img src={imageTwo} alt="picture2" />
      <div class="description">
        <p>
          <Link to={"/paleopastabake"}>Paleo Pasta</Link>
        </p>
      </div>
    </div>
    <div className="imagesWrap">
      <img src={imageThree} alt="picture3" />
      <div class="description">
        <p>
          <Link to={"/cookiedoughbar"}>Cookie Dough Bars</Link>
        </p>
      </div>
    </div>
    <div className="imagesWrap">
      <img src={imageFour} alt="picture4" />
      <div class="description">
        <p>
          <Link to={"/smoothiebowl"}>Smoothie Bowl</Link>
        </p>
      </div>
    </div>
    <div className="imagesWrap">
      <img src={imageFive} alt="picture5" />
      <div class="description">
        <p>
          <Link to={"/fudgypaleobrownies"}>Fudgy Paleo Brownies</Link>
        </p>
      </div>
    </div>
  </div>
)

export default mainImages
