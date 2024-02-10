import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { scrollToProjects, scrollToContact } from "../utils/scrollTo";

function Header() {
  return (
    <Navbar expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
          <Nav className="ms-auto align-items-center">
            <Nav.Link className="primaryColor linksHover fs-1">Home</Nav.Link>
            <Nav.Link
              href="#"
              className="plainColor linksHover fs-2"
              onClick={scrollToProjects}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#"
              className="plainColor linksHover fs-2"
              onClick={scrollToContact}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
