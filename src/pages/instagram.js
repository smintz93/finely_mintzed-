import React, { Component } from 'react';
import axios from 'axios';

import BackArrow from '../components/arrows/backArrow';
import NextArrow from '../components/arrows/NextArrow';
import "./instagram.css"

const API_KEY = process.env.GATSBY_INSTAGRAM_API_KEY

class Instagram extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: [],
      slideCount: 0
    }
  }

  componentWillMount(){
    console.log(" -- Component Will Mount -- ")
    this.fetchPhotos();
  }

  componentWillUnmount(){
    console.log(" -- Component Will UNMount -- ")
  }

  fetchPhotos = () => {
    console.log("Api call for Insta photos")
    axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${API_KEY}`)
      .then(response => {
        this.setState({
          photos: response.data.data
        })
    })
  }

  nextImage = () => {
    console.log('Next')
    // Call also create a set timeout that accomplished same thing 
    this.setState({slideCount: this.state.slideCount + 1 })

    // WRITE LOGIC TO START OVER SLIDE SHOW 

    // if(this.state.slideCount === 2) {
    //   this.setState({slideCount: 1})
    // }
  }

  previousImage = () => {
    console.log('Back')
    this.setState({ slideCount: this.state.slideCount - 1  })
  }

  // timer = () => {
  //   setInterval((time) => {
  //     this.setState({ slideCount: this.state.slideCount + 1 })
  //     console.log(time)
  //   }, 3000);
  // }

  render() {
    // { console.log(this.state.photos) }
    return (
      <div class='instaDescription' style={{marginTop: '2.45rem'}}>
      <p>Take a look at some of my most recent creations below or head on over to the <a href='https://www.instagram.com/finelymintzed/'>FinelyMintzed</a> Instagram</p>
      <div className='insta'>  
        {this.state.slideCount !== 0 ? <BackArrow previousImage={this.previousImage}/> : ''}
       
          {this.state.photos.map((photo, key) => {
            if(this.state.photos.indexOf(photo) === this.state.slideCount) {

            return (
              <div style={{marginTop: '30px'}}key={photo.id}>
                <img src={photo.images.standard_resolution.url} alt={photo.caption} 
                style={{width: '500px', height: '400px'}}/>
                 {/* <div style={{width: '200px', margin: '16px auto', fontSize: '12px',fontStyle: 'italic'}}>
                  {photo.caption !== null ? photo.caption.text : ""}
                </div>  */}
              </div>
            );
            }
            return ''
          })}
        {this.state.slideCount !== (this.state.photos.length - 1) ? <NextArrow style={{margin: '10px'}}nextImage={this.nextImage}/> : ''}
      </div>
      </div>
    );
  }
}

export default Instagram;