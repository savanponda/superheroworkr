import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'
import india from '../assets/india.png'
import "./navBar2.css";
import search from "./images/search.png";

function NavBar2() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='fluid'>
        <Navbar.Brand href="#" style={{display:'flex', alignItems:'center'}}><img src={logo} alt="" srcset="" /><h1>Superworkr</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='nav2-container'>
            <img src={india} alt="" srcset="" /><NavDropdown title="India" id="navbarScrollingDropdown"className='nav2-drop'>
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
            <Button className="nav2-button" style={{marginRight:'5px', borderRadius:'5px'}}>Search</Button>
            <Button className="nav2-button" style={{marginRight:'5px', borderRadius:'5px'}}>Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar2;
