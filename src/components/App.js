import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";
import axios from "axios";
import ImageList from "./ImageList/ImageList";

class App extends Component {

  state ={
    images :[]
  }



  onSearchImage = async (search) => {
    const result = await axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: search,
        },
        headers: {
          Authorization:
            "Client-ID 3EvSIMEoDsbOEXSoNQaZxjwd8p9fhpIew92UiHTUvEc",
        },
      })
      
      this.setState({
        images : result.data.results
      })
  };


  render() {

    return (
      <div className="app-container">
        <SearchBar onSearchImage={this.onSearchImage} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
