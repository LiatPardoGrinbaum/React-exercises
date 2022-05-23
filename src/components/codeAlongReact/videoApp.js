import React from "react";
import SearchBar from "./SerachBar";
import youtube from "./apis/youtube";

class VideoApp extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    //youtube is a pre-configure instance of axios
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
export default VideoApp;
