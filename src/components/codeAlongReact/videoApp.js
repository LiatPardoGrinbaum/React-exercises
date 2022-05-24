import React from "react";
import SearchBar from "./SerachBar";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class VideoApp extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    //means that in the first load application this will be the default to be shown on the screen.
    this.onTermSubmit("cats");
  }

  onTermSubmit = async (term) => {
    //youtube is a pre-configure instance of axios
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoApp;
