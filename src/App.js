import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Nav from "./component/Nav";

import axios from "axios";

import { Provider } from "./context";
import Home from "./component/Home";
import SearchResult from "./component/SearchResult";
import MovieDetails from "./component/movieDetails";

class App extends Component {
  state = {
    movieList: [],
    searchResult: [],
    API_KEY: "c51081c224217a3989b0bc0c4b3d3fff"
  };
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          this.state.API_KEY
        }&language=en-US&page=1`
      )
      .then(res => {
        this.setState({
          movieList: res.data.results
        });
        console.log(this.state.movieList);
      });
  }

  getMovies = e => {
    e.preventDefault();
    const moviename = e.target.elements.moviename.value;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          this.state.API_KEY
        }&query=${moviename}`
      )
      .then(res => {
        this.setState({
          searchResult: res.data.results
        });
        console.log(this.state.searchResult);
      });
  };

  render() {
    const contextProps = {
      myState: this.state,
      getMovies: this.getMovies
    };
    return (
      <Provider value={contextProps}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={MovieDetails} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
