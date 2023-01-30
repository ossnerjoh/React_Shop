import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductCard({ product }) {
  return (
    <Col sm="12" md="6" lg="4" className="mb-2">
      <Card className="p-2 m-1 h-100 shadow">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description.trim().substring(0, 30) + "..."}
          </Card.Text>
          <Card.Text>{product.category}</Card.Text>
          <Button variant="light">
            <span role="img" aria-label="add-to-cart">
              🛒
            </span>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
