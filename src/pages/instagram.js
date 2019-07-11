import React, { Component } from 'react';
const API_KEY = process.env.GATSBY_INSTAGRAM_API_KEY

// ttps://api.instagram.com/v1/users/self/media/recent/?access_token=11710304357.eff30cd.2e768e7e7e774d7185166f670650383b

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
    this.fetchPhotos();

  }

  fetchPhotos = () => {
    console.log("Api call for Insta photos")
  }

  render() {
    return (
      <div>
        <h1>Insta Feed...</h1>
      </div>
    );
  }
}

export default Instagram;