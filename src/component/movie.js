import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context";

class Movie extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div className="col align-self-center" key={this.props.id}>
        <div className="card" style={{ width: "12rem" }}>
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
    );
  }
}

export default Movie;
