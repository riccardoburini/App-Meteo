import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
function MyNav() {
  const [userSearch, setUserSearch] = useState("");

  const userCitySearch = (e) => {
    setUserSearch(e.target.value);
  };

  return (
    <Navbar bg="lprimary" expand="lg">
      <Container fluid>
        <Link to={`/`}>
          <Navbar.Brand href="#" id="nav">
            <span style={{ fontSize: "2em" }}>LF</span> Meteo.com
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search your city here"
              className="me-2"
              aria-label="Search"
              onChange={userCitySearch}
              style={{ width: "250px", color: " #0d6efd" }}
              value={userSearch}
            />
            <Link to={`/Specific/${userSearch}`}>
              <Button variant="primary">Go</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
