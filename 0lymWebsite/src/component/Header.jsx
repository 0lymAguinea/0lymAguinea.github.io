import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="primaryColor linksHover fs-1">
              Home
            </Nav.Link>
            <Nav.Link href="#projects" className="plainColor linksHover fs-2">
              Projects
            </Nav.Link>
            <Nav.Link href="#resume" className="plainColor linksHover fs-2">
              Résumé
            </Nav.Link>
            <Nav.Link href="#contact" className="plainColor linksHover fs-2">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
