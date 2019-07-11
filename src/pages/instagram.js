import React, { Component } from 'react';

class Instagram extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: []
    }
  }

  componentWillMount(){
    console.log(" -- Component Will Mount -- ")
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