import React, { Component } from "react";
import { storeMovies, detailMovie } from "./Data";

const MovieContext = React.createContext(); //context object
//context object has two components :-
//Provider
//Consumer

class MovieProvider extends Component {
  //React components has a built-in state object,state a unique reference throughout the app
  //The state object is where you store property values that belongs to the component.
  //When the state object changes, the component re-renders.

  state = {
    movies: [],
    detailMovie: detailMovie,
    watchlist: [],
  };
  //component lifecycle method
  componentDidMount() {
    this.setMovies(); //this will ensure only the copies of data is mounted and not the actual data so the actual data is kept untouched.
  }
  setMovies = () => {
    let tempMovies = [];
    storeMovies.forEach((item) => {
      const singleItem = { ...item }; //copying the values present in item and not referencing it.
      tempMovies = [...tempMovies, singleItem];
    });
    this.setState(() => {
      return { movies: tempMovies };
    });
  };

  getItem = (id) => {
    //function to get items of particular id
    const movie = this.state.movies.find((item) => item.id === id);
    return movie;
  };

  handleDetail = (id) => {
    const movie = this.getItem(id);
    this.setState(() => {
      return { detailMovie: movie }; ///change the detail movie to movie in state object so that the clicked movie details is shown.
    });
  };

  addToWatchlist = (id) => {
    let tempMovies = [...this.state.movies];
    const index = tempMovies.indexOf(this.getItem(id));
    const movie = tempMovies[index];
    movie.watchlist = true;

    this.setState(() => {
      return {
        movies: tempMovies,
        watchlist: [...this.state.watchlist, movie], //adds the selected movie in watchlist
      };
    });
  };

  removeItem = (id) => {
    let tempMovies = [...this.state.movies];
    let tempWatchlist = [...this.state.watchlist];
    tempWatchlist = tempWatchlist.filter((item) => item.id !== id);

    const index = tempMovies.indexOf(this.getItem(id));
    let removedMovie = tempMovies[index];
    removedMovie.watchlist = false;

    this.setState(() => {
      return {
        watchlist: [...tempWatchlist],
        movies: [...tempMovies],
      };
    });
  };

  clearWatchlist = () => {
    this.setState(
      () => {
        return {
          watchlist: [],
        };
      },
      () => {
        this.setMovies();
      }
    );
  };

  render() {
    return (
      <MovieContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToWatchlist: this.addToWatchlist,
          removeItem: this.removeItem,
          clearWatchlist: this.clearWatchlist,
        }}
      >
        {this.props.children}{" "}
        {/*this will get all the components present inside provider component */}
      </MovieContext.Provider>
    );
  }
}
const MovieConsumer = MovieContext.Consumer;

export { MovieProvider, MovieConsumer };
