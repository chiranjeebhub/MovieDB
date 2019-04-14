import React, { Component } from "react";
import Movie from "./movie";
import { MyContext } from "../context";

class NowPlaying extends Component {
  static contextType = MyContext;

  render() {
    return (
      <div className="container">
        <hr />
        <h1>Now in Theaters</h1>
        <hr />
        <div className="row justify-content-center">
          {this.context.myState.movieList.map(movie => {
            return <Movie id={movie.id} image={movie.poster_path} />;
          })}
        </div>
      </div>
    );
  }
}

export default NowPlaying;
