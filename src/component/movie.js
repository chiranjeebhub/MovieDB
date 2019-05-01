import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context";

class Movie extends Component {
  static contextType = MyContext;
  render() {
    return (
      <Suspense fallback={<div className="loader" />}>
        <div
          className="col align-self-center"
          key={this.props.id}
          style={{ marginBottom: "15px", marginTop: "15px" }}
        >
          <div className="card shadow " style={{ width: "12rem" }}>
            {this.props.image === null ? (
              <img
                className="card-img-top"
                src={require("../noimg.png")}
                alt="Card cap"
              />
            ) : (
              <Link to={`/${this.props.id}`}>
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
                  alt="Card cap"
                />
              </Link>
            )}
          </div>
        </div>
      </Suspense>
    );
  }
}

export default Movie;
