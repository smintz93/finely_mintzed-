import React, { Component } from 'react';
import axios from 'axios';

import BackArrow from '../components/arrows/backArrow';
import NextArrow from '../components/arrows/NextArrow';

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
    this.setState({slideCount: this.state.slideCount +1 })
  }

  previousImage = () => {
    console.log('Back')
    this.setState({ slideCount: this.state.slideCount -1  })
  }

  render() {
    // { console.log(this.state.photos) }
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px'}}>  
        {this.state.slideCount !== 0 ? <BackArrow previousImage={this.previousImage}/> : ''}
       
          {this.state.photos.map((photo, key) => {
            if(this.state.photos.indexOf(photo) === this.state.slideCount) {

            return (
              <div key={photo.id}>
                <img src={photo.images.standard_resolution.url} alt={photo.caption} />
                <div style={{width: '600px', margin: '24px auto', fontStyle: 'italic'}}>
                  {photo.caption !== null ? photo.caption.text : ""}
                </div>
              </div>
            );
            }
            return ''
          })}
        {this.state.slideCount !== (this.state.photos.length - 1) ? <NextArrow nextImage={this.nextImage}/> : ''}
        
      </div>
    );
  }
}

export default Instagram;