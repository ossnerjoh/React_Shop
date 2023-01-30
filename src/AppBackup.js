import "./styles.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import products from "./data/products";

export default function App() {
  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BS1 FanShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Artikel</Nav.Link>
            <Nav.Link href="#features">Warenkorb</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Main Area */}
      <Container>
        <Row>
          {/* Sidebar */}
          <Col className="bg-info m-1 d-none d-sm-block" sm="3">
            <h4>Filter</h4>
            <Form>
              {[
                "men's clothing",
                "jewelery",
                "electronics",
                "women's clothing"
              ].map((item) => {
                return (
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label={item}
                  />
                );
              })}

              <Form.Group className="my-3" controlId="filterByTitle">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Suchbegriff" />
                <Form.Text className="text-muted">
                  Filtere die Suchergebnisse nach einem bestimmten String
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>

          {/* Productsdisplay */}
          <Col className="bg-info m-1 " xs>
            <Container className="d-flex flex-wrap justify-content-between align-items-stretch">
              {products.map((product) => {
                return (
                  <Col sm="12" md="6" lg="4">
                    <Card className="p-2 m-1 h-100">
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                          {product.description.trim().substring(0, 30) + "..."}
                        </Card.Text>
                        <Button variant="light">
                          <span role="img" aria-label="add-to-cart">
                            🛒
                          </span>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
