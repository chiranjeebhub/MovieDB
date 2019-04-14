import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../context";

class MovieDetails extends Component {
  state = {
    movieDetails: []
  };
  static contextType = MyContext;
  render() {
    //https://api.themoviedb.org/3/movie/287947?api_key=c51081c224217a3989b0bc0c4b3d3fff&language=en-US
    const id = this.props.match.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          this.context.myState.API_KEY
        }&language=en-US`
      )
      .then(res => {
        this.setState({
          movieDetails: res.data
        });
      });
    return (
      <div class="card mb-3">
        <img
          class="card-img-top"
          style={{ height: "50" }}
          src={`https://image.tmdb.org/t/p/original${
            this.state.movieDetails.backdrop_path
          }`}
        />
        <div class="card-body">
          <h5 class="card-title">{this.state.movieDetails.original_title}</h5>
          <p class="card-text">{this.state.movieDetails.overview}</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieDetails);
