import React, { Component } from 'react';
import axios from 'axios';

import BackArrow from '../components/arrows/backArrow';
import NextArrow from '../components/arrows/NextArrow';


const API_KEY = process.env.GATSBY_INSTAGRAM_API_KEY

class Instagram extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: []
    }
  }

  componentWillMount(){
    console.log(" -- Component Will Mount -- ")
    // console.log(" -- API_KEY -- ")
    // console.log(API_KEY);
    // console.log(" -- API_KEY -- ")
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

  render() {
    { console.log(this.state.photos) }


    const photoList = this.state.photos.map((photo, i) => {
      return (
        <div key={photo.id}>
        
          <img src={photo.images.standard_resolution.url} alt={photo.caption}/>
          <div style={{width: '600px', margin: '24px auto', fontStyle: 'italic'}}>
            {photo.caption !== null ? photo.caption.text : ""}
          </div>
        </div>
      );
    })

      return (
        <div>
          <BackArrow />
          <NextArrow />
          {photoList}
        </div>
      )

  }
}

export default Instagram;