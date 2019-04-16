import React, { Component } from "react";
import Movie from "./movie";
import { MyContext } from "../context";

class SearchResult extends Component {
  static contextType = MyContext;

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row justify-content-center">
            {this.context.myState.searchResult.map(movie => {
              return (
                <div key={movie.id}>
                  <Movie id={movie.id} image={movie.poster_path} />
                </div>
              );
            })}
          </div>

          {/* <button>Prev</button>
        <button>Next</button> */}
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
