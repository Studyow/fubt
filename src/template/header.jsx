 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';

 import Logo01 from '../assets/basic/logo01.png';
 import DarkMode from "./DarkMode"
import BSColor from './BSColor';
 
 function Header() {
   return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/home">
        <img src={Logo01} alt="" width={100}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link href="/home"><h5>Events</h5></Nav.Link>
          <Nav.Link href="/News"><h5>News</h5></Nav.Link>
          <Nav.Link href="/about"><h5>About</h5></Nav.Link>
          <BSColor/>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
   );
 }
 
 export default Header;