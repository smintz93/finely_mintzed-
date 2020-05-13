import React from 'react';
import Layout from "../components/layout";
import './about.css'
import JoBioPic from '../images/JohannaBio.jpeg';

const About = () => (
  <Layout>
    <div className='pageAboutWrapper'>
    <h1>About finelymintzed</h1>
    <div class='aboutContainerMain'>
    <img className="JoBio" src={JoBioPic} />
    <div class='aboutTextMain'>
      <p>
          Hello everyone! My name is Johanna Mintz and I am so excited to welcome
          you to my blog, finelymintzed. I am originally from Chicago, but currently
          living in Washington, DC, after graduating from Georgetown University in
        2018.
      </p> 
      <p>
          While I enjoyed cooking throughout college, my love for cooking and
          crafting new recipes in the kitchen has sky-rocketed in my post-grad
          life.
      </p>
      <p>
          My favorite way to unwind after work is to head straight to the kitchen
        and start prepping dinner (or a post-dinner treat). My love for all thing
        paleo started in high school when my Mom and I thought we would try out
        10-day paleo plan. It was not exactly love at first bite 😉, as our bodies
        had to adjust to this new way of eating, but we decided to continue eating
        paleo after those 10 days and have since become utterly hooked!
      </p>
      <p>
          There is no better feeling than fueling your body with real, whole,
          nutrient-dense foods. I feel the best when I eat paleo, but I also am
          strongly against deprivation and very much support a balanced, healthy
          way of life. So while most of the recipes you’ll see here are paleo, I
          also incorporate some non-paleo goods, and those who know me know that I
          will rarely say no to a good old-fashioned (non-paleo) treat.
      </p>
      <p>
          I hope after taking a peak around finelymintzed you realize how fun and
          easy it is to make simple, delicious, and healthy meals (and desserts)
          and feel inspired to get cooking!
      </p>
    </div>
    </div>
    </div>
  </Layout>
)
     


export default About;