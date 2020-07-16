import React, { Component } from 'react';
import axios from 'axios';

import BackArrow from '../components/BackArrow';
import NextArrow from '../components/NextArrow';
import "./instagram.css"

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
    // this.timer();
  
  }

  componentWillUnmount(){
    console.log(" -- Component Will UNMount -- ")
  }

  fetchPhotos = () => {
    console.log("Api call for Insta photos")
    axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=11710304357.eff30cd.2e768e7e7e774d7185166f670650383b`)
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

 timer = () => {
    setInterval((time) => {
     this.setState({ slideCount: this.state.slideCount + 1 })
      console.log(time)
    }, 3000);
 }

  render() {
    // { console.log(this.state.photos) }
    return (
      <div class='instaDescription' style={{display: 'none', marginTop: '2.45rem'}}>
        <p>Take a look at some of my most recent creations below or head on over to the <a href='https://www.instagram.com/finelymintzed/' target="_blank" >finelymintzed</a> Instagram</p>
      <div className='insta'>  
        {this.state.slideCount !== 0 ? <BackArrow previousImage={this.previousImage}/> : ''}
       
          {this.state.photos.map((photo, key) => {
            if(this.state.photos.indexOf(photo) === this.state.slideCount) {

            return (
              <div style={{marginTop: '30px'}}key={photo.id}>
                <img src={photo.images.standard_resolution.url} alt={photo.caption} 
               />
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