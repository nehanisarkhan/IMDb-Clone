import React from "react";
import { MovieConsumer } from "../Context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const Movie = (props) => {
  const { id, title, img, watchlist, rating } = props.movie;
  return (
    <MovieWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <MovieConsumer>
          {(value) => (
            <Card style={{ width: "18rem" }}>
              <Link to="/details">
                <Card.Img
                  variant="top"
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                  src={img}
                />
              </Link>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <i class="fas fa-star" /> {rating}
                </Card.Subtitle>
                {/* <Card.Text>{info}</Card.Text> */}
                {/* <Button variant="outline-secondary">Go To Watchlist</Button> */}
                <Button
                  // className="cart-btn"
                  variant="secondary"
                  disabled={watchlist ? true : false}
                  onClick={() => {
                    value.addToWatchlist(id);
                  }}
                >
                  {watchlist ? (
                    <p className="text-capitalize mb-0" disabled>
                      Watchlisted
                    </p>
                  ) : (
                    <i class="far fa-bookmark"></i>
                  )}
                </Button>
              </Card.Body>
            </Card>
          )}
        </MovieConsumer>
      </div>
    </MovieWrapper>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    rating: PropTypes.number,
    info: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    watchlist: PropTypes.bool,
  }).isRequired,
};

//styled-components

const MovieWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }

  //transition is for deciding how the effects is going to take place

  .card-img-top {
    transition: all 0.1s linear;
  }
  .img-container: hover .card-img-top {
    transform: scale(1.2);
  }
`;

export default Movie;
