import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    search: "",
  };

  inputChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  searchImage = () => {
    this.props.onSearchImage(this.state.search)
  };

  render() {
    return (
      <div>
        <div className="search-bar-container ui icon input">
          <input
            onChange={this.inputChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.searchImage();
              }
            }}
            type="text"
            placeholder="Search..."
          />
          <i
            className="inverted circular search link icon"
            onClick={this.searchImage}
          ></i>
        </div>
      </div>
    );
  }
}
export default SearchBar;
