import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, HashRouter, Route } from "react-router-dom";
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
    currentpage: 1,
    totalpage: 1,
    API_KEY: "c51081c224217a3989b0bc0c4b3d3fff"
  };
  componentDidMount() {
    this.getCurrentMovies();
  }

  getCurrentMovies = e => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          this.state.API_KEY
        }&language=en-US&page=${this.state.currentpage}`
      )
      .then(res => {
        this.setState({
          movieList: res.data.results,
          currentpage: res.data.page,
          totalpage: res.data.total_pages
        });
        console.log(this.state);
      });
  };

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

  nextPage = () => {
    this.setState(
      {
        currentpage: (this.state.currentpage += 1)
      },
      () => console.log(this.state.currentpage)
    );
    this.getCurrentMovies();
  };

  prevPage = () => {
    if (this.state.movieList && this.state.currentpage !== 1) {
      this.setState(
        {
          currentpage: (this.state.currentpage -= 1)
        },
        () => console.log(this.state.currentpage)
      );
      this.getCurrentMovies();
    }
  };

  nextSearchPage = () => {
    this.setState(
      {
        currentpage: (this.state.currentpage += 1)
      },
      () => console.log(this.state.currentpage)
    );
    this.getMovies();
  };

  prevSearchPage = () => {
    if (this.state.movieList) {
      this.setState(
        {
          currentpage: (this.state.currentpage -= 1)
        },
        () => console.log(this.state.currentpage)
      );
      this.getMovies();
    }
  };

  render() {
    const contextProps = {
      myState: this.state,
      getMovies: this.getMovies,
      nextPage: this.nextPage,
      prevPage: this.prevPage,
      nextSearchPage: this.nextSearchPage,
      prevSearchPage: this.prevSearchPage
    };
    return (
      <Provider value={contextProps}>
        <BrowserRouter>
          <HashRouter basename="/">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={SearchResult} />
              <Route path="/:id" component={MovieDetails} />
            </Switch>
          </HashRouter>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
