import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{
          display: "flex !important",
          justifyContent: "space-around !important",
        }}
      >
        <Container>
          <Link
            to="/"
            style={{
              textDecoration: "inherit",
              textDecorationColor: "inherit",
            }}
          >
            <Navbar.Brand href="/">IMDb</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Dropdown as={ButtonGroup}>
                <Button variant="secondary">Menu</Button>

                <Dropdown.Toggle
                  split
                  variant="secondary"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-5"
                  aria-label="Search"
                />
                <Button variant="secondary">Search</Button>
              </Form>
              <Link
                to="/watchlist"
                style={{
                  textDecoration: "inherit",
                  textDecorationColor: "inherit",
                }}
              >
                <Nav.Link href="#watchlist">Watchlist</Nav.Link>
              </Link>
              <Link
                to="/login"
                style={{
                  textDecoration: "inherit",
                  textDecorationColor: "inherit",
                }}
              >
                <Nav.Link href="#signin">SignIn</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
