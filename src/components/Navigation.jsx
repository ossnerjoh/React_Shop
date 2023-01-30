import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">BS1 FanShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Artikel
          </Nav.Link>
          <Nav.Link as={Link} to="/warenkorb">
            Warenkorb
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
