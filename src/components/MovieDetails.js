import React from "react";
import { MovieConsumer } from "../Context";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieDetails = (props) => {
  return (
    <MovieConsumer>
      {(value) => {
        const { id, title, img, rating, info, watchlist, Director, Stars } =
          value.detailMovie;
        return (
          <div className="container py-5">
            {/*title*/}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/*title end*/}
            {/*movie-info*/}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 ">
                <img src={img} className="img-fluid" alt="product" />
              </div>

              {/*movie text*/}

              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h3>Movie : {title}</h3>
                <h5 className="text-blue">
                  <i class="fas fa-star" />
                  {rating}
                </h5>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Description :
                </p>
                <p className="text-muted lead">{info}</p>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Director :
                </p>
                <p className="text-muted lead">{Director}</p>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Stars :
                </p>
                <p className="text-muted lead">{Stars}</p>
                {/*Buttons*/}
                <div className="mt-3">
                  <Link to="/">
                    <Button variant="secondary" style={{ marginRight: "2rem" }}>
                      Back to Homepage
                    </Button>
                  </Link>
                  <Button
                    variant="secondary"
                    disabled={watchlist ? true : false}
                    onClick={() => {
                      value.addToWatchlist(id); //from value.detailMovie
                    }}
                  >
                    {watchlist ? "Watchlisted" : "Add to Watchlist"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </MovieConsumer>
  );
};

export default MovieDetails;
