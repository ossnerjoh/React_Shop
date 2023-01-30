import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProductCard from "./ProductCard";

export default function ProductsDisplay({ products }) {
  return (
    <Col className="m-1 " xs>
      <Container className="d-flex flex-wrap justify-content-between align-items-stretch">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Container>
    </Col>
  );
}
