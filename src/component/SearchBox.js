import React, { Component } from "react";
import { MyContext } from "../context";

class SearchBox extends Component {
  static contextType = MyContext;
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid">
          <div className="container" style={{ textAlign: "center" }}>
            <h1 className="display-4">Find your Movie</h1>
            <p className="lead">
              Find rating, descrips and much more of your fev. movie.
            </p>
            <form onSubmit={this.context.getMovies}>
              <input
                name="moviename"
                className="form-control mr-sm-2"
                type="search, submit"
                placeholder="Search"
                aria-label="Search"
                style={{ height: "50px" }}
              />
            </form>
          </div>
        </div>
        <div />
      </React.Fragment>
    );
  }
}

export default SearchBox;
