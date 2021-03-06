import React, { Component, lazy, Suspense } from "react";
//import Movie from "./movie";
import { MyContext } from "../context";

const Movie = lazy(() => import("./movie"));

class NowPlaying extends Component {
  static contextType = MyContext;

  render() {
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-8">
            <h2>Now in Theaters</h2>
          </div>
          <div className="col-4" style={{ textAlign: "right" }}>
            <button
              className="btn btn-outline-primary"
              onClick={this.context.prevPage}
            >
              Previous Page
            </button>
            &nbsp;&nbsp;
            <button
              className="btn btn-outline-primary"
              onClick={this.context.nextPage}
            >
              Next Page
            </button>
          </div>
        </div>
        <hr />

        <div className="row justify-content-center">
          {this.context.myState.movieList.map(movie => {
            return (
              <Suspense fallback={<div className="loader" />}>
                <div key={movie.id}>
                  <Movie id={movie.id} image={movie.poster_path} />
                </div>
              </Suspense>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NowPlaying;
