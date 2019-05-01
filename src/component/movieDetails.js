import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
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
      // <div class="card bg-dark text-white">
      //   <img
      //     class="card-img"
      //     src={`https://image.tmdb.org/t/p/original${
      //       this.state.movieDetails.backdrop_path
      //     }`}
      //     alt=""
      //   />
      //   <div class="card-img-overlay">
      //     <h5 class="card-title">{this.state.movieDetails.original_title}</h5>
      //     <p class="card-text">{this.state.movieDetails.overview}</p>
      //     <p class="card-text">
      //       Release Date: {this.state.movieDetails.release_date}
      //     </p>
      //   </div>
      // </div>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            this.state.movieDetails.backdrop_path
          })`,
          height: "100vh",
          backgroundSize: "cover"
        }}
      >
        <div className="container" style={{ paddingTop: "20vh" }}>
          <div
            className="media jumbotron"
            style={{ background: "rgba(220, 220, 220, 0.9)" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${
                this.state.movieDetails.poster_path
              }`}
              className="align-self-start mr-3"
              alt="..."
              style={{ width: "100px" }}
            />
            <div className="media-body">
              <h5 className="mt-0">{this.state.movieDetails.title}</h5>
              <p>{this.state.movieDetails.overview}</p>
              <p>
                Release Date: <b>{this.state.movieDetails.release_date}</b>
              </p>
            </div>
          </div>
          <Link to="/">
            <button type="button" class="btn btn-primary">
              Back
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieDetails);
