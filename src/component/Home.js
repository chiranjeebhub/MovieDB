import React, { Component, lazy, Suspense } from "react";
//import NowPlaying from "./NowPlaying";
import SearchResult from "./SearchResult";
import SearchBox from "./SearchBox";

const NowPlaying = lazy(() => import("./NowPlaying"));

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <SearchBox />

        <SearchResult />
        <Suspense fallback={<div className="loader" />}>
          <NowPlaying />
        </Suspense>
      </div>
    );
  }
}

export default Home;
