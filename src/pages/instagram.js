import React, { Component } from 'react';
import axios from 'axios';


const API_KEY = process.env.GATSBY_INSTAGRAM_API_KEY

// https://api.instagram.com/v1/users/self/media/recent/?access_token=11710304357.eff30cd.2e768e7e7e774d7185166f670650383b

class Instagram extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: []
    }
  }

  componentWillMount(){
    console.log(" -- Component Will Mount -- ")
    console.log(" -- API_KEY -- ")
    console.log(API_KEY);
    console.log(" -- API_KEY -- ")
    this.fetchPhotos();
  }

  fetchPhotos = () => {
    console.log("Api call for Insta photos")

    axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${API_KEY}`)
      .then(response => {
        console.log(response.data.data)
      this.setState({
        photos: response.data.data
      })
    })
  }

  render() {
  //   {this.state.photos.map((photo, key) => {
  //     return (
  //       <div key={photo.id}>
  //         <h1>Insta Feed...</h1>
  //         {/* {console.log(this.state.photos, "this is that")} */}
  //         <img src={photo.images.standard.resolution.url} alt={photo.caption}/>
  //       </div>
  //     );
  //   })}

  // }


  const photoList = this.state.photos.map((photo, i) => {
    return (
      <div key={photo.id}>
        <img src={photo.images.standard_resolution.url} />
      </div>
    );
  })

  return (
    <div>
      {photoList}
    </div>
  )

  }
}

export default Instagram;