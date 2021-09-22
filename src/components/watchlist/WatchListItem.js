import React from "react";
import { Card, Button } from "react-bootstrap";
// import styled from "styled-components";
import { Link } from "react-router-dom";

const WatchListItem = ({ item, value }) => {
  const { id, title, img, rating } = item;
  return (
    <>
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
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

              <Button
                variant="secondary"
                className="mx-3"
                onClick={() => value.removeItem(id)}
              >
                Remove
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* <Card
        style={{
          width: "18rem",
          display: "grid",
          justifyContent: "space-evenly",
        }}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </>
  );
};

export default WatchListItem;
