import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from 'react-bootstrap/Badge';
import logo from "../assets/logo.png";
import india from "../assets/india.png";
import "./navBar2.css";
import search from "../assets/search.png";
import { BiMessageAltDetail } from "react-icons/bi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";


function NavBar2() {
  return (
    <>
      <Navbar expand="lg" className="">
        <Container className="fluid">
          <Navbar.Brand
            href="#"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={logo} alt="" srcset="" />
            <h1>Superworkr</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="nav2-container">
                <img src={india} alt="" srcset="" />
                <NavDropdown
                  title="India"
                  id="navbarScrollingDropdown"
                  className="nav2-drop"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="nav2-divider"></div>
                <img src={search} alt="" srcset="" />
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Job title, keyword, company"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
              </div>
            </Nav>
            <div className="notifications">
            <Badge bg="danger" className="badge">2</Badge>
              <BiMessageAltDetail />
              
              <HiOutlineBellAlert />
              <LuSettings />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar2;
{
  /* <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" className="dropdown-toggle">
            India
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item href="#/action-1">USA</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Canada</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Singapore</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <div className="divider"></div>
            
            
            <Form.Control type="text" id='search' placeholder="Search" className="form-control1" 
            
          /> */
}
