import React from "react"
import { Link } from "gatsby"
import  "./mainImages.css"
import imageOne from "../../images/imageOne.png"
import imageTwo from "../../images/imageTwo.png"
import imageThree from "../../images/smoothiebowl.jpg"
import bpPancake from "../../images/newpancake.jpg"
import spToast from "../../images/sptoast.jpg"

const mainImages = () => (
  <div className="imageContainer">
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
        <p><Link to={"/smoothiebowl"}>Smoothie Bowl</Link></p>
      </div>
    </div>
    <div className="imagesWrap">
      <img src={bpPancake} alt="picture4" />
      <div class='description'>
        <p><Link to={"/paleobanana"}>Banana Pancake</Link></p>
      </div>
    </div>
    <div className="imagesWrap">
      <img src={spToast} alt="picture5" />
      <div class='description'>
        <p><Link to={"/sweetpotatotoast"}>Sweet Potato Toast</Link></p>
      </div>
    </div>
  </div>
)

export default mainImages;