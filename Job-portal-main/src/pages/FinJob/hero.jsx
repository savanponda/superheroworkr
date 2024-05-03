import React from "react";
import "./hero.css";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Hero() {
  return (
    <>
    <div className="banner">
    <div className="nav1">
    <div className="head">
    <h1>Find Job</h1>
    </div>
    
    <div className="bread">
     <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Find Job
      </Breadcrumb.Item>
    </Breadcrumb>
    </div>
    </div>
    </div>
    
  {/* <div className="nav">
    <div className="left"><p>Find Job</p></div>
    <div className="Right"><p>Home/Find Job</p></div>
  </div> */}

      <div className="banner">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ height: "112px" }}
          navbarScroll
        >
          <div className="banner-container">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Job title, keyword"
                className="me-2"
                aria-label="Search"
              />
            </Form>

            <div className="nav2-divider"></div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Your location"
                className="me-3"
                aria-label="Search"
              />
            </Form>
            <div className="nav2-divider"></div>
            <Form className="d-flex">
              <NavDropdown title="Select Category" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Form>
            <div className="nav2-divider"></div>
            <Form className="d-flex">
            </Form>
            <Form className="d-flex">
              <NavDropdown title="Advance Filters" id="collapsible-nav-dropdown" className="drop-link">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Form>
            <Button className="nav2-button" style={{ marginRight: "5px" }}>
              Find Job
            </Button>
          </div>
        </Nav>
      </div>
    </>
  );
}

export default Hero;
