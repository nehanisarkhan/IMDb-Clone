import React from "react";
import Movie from "./Movie";
import { MovieConsumer } from "../Context";

const MovieList = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <MovieConsumer>
            {(value) => {
              return value.movies.map((movie) => {
                return <Movie key={movie.id} movie={movie} />;
              });
            }}
          </MovieConsumer>
        </div>
      </div>
    </>
  );
};

export default MovieList;
