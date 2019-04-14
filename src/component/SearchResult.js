import React, { Component } from "react";
import Movie from "./movie";
import { MyContext } from "../context";

class SearchResult extends Component {
  static contextType = MyContext;

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {this.context.myState.searchResult.map(movie => {
            return <Movie id={movie.id} image={movie.poster_path} />;
          })}
        </div>
      </div>
    );
  }
}

export default SearchResult;
