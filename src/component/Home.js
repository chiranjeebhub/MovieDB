import React, { Component } from "react";
import NowPlaying from "./NowPlaying";
import SearchResult from "./SearchResult";
import SearchBox from "./SearchBox";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <SearchBox />
        <SearchResult />
        <NowPlaying />
      </div>
    );
  }
}

export default Home;
