import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navBar.css'

const NavBar = () => {
    return (

      <Navbar collapseOnSelect expand="lg" className=" bg-body">
      <Container className='container'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='link'style={{}}>Home</Nav.Link>
            <Nav.Link href="#pricing" className='link'>Find Job</Nav.Link>
            <Nav.Link href="#pricing" className='link'> Talent</Nav.Link>
            <Nav.Link href="#pricing" className='link'>Explore</Nav.Link>
            <Nav.Link href="#pricing" className='link'>Resources</Nav.Link>
            <Nav.Link href="#pricing" className='link'>About</Nav.Link>
            <NavDropdown.Divider />

          </Nav>
          <Nav>
          <Nav.Link href="#pricing">+5467476547</Nav.Link>
            <NavDropdown title="English" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )  
}

export default NavBar