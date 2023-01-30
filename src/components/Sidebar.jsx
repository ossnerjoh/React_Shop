import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Radiobutton from "./Radiobutton";

export default function Sidebar({ products, handleFilterChange }) {
  //Get Distinct Categories
  let categories = products.map((p) => p.category);
  categories = categories.filter(
    (val, index, self) => self.indexOf(val) === index
  );

  const [noFilter_checked, setNoFilter_checked] = useState(true);
  return (
    <Col className="m-1 d-none d-sm-block border-end" sm="3">
      <h4>Filter</h4>
      <Form>
        <Radiobutton
          label="kein Filter"
          name="cat_filter"
          value="keinFilter"
          handleFilterChange={handleFilterChange}
        />

        {categories.map((label, index) => {
          return (
            <Radiobutton
              key={index}
              label={label}
              name="cat_filter"
              value={label}
              handleFilterChange={handleFilterChange}
            />
          );
        })}

        <Form.Group className="my-3" controlId="filterByTitle">
          <Form.Label>Suche</Form.Label>
          <Form.Control type="email" placeholder="Suchbegriff" />
          <Form.Text className="text-muted">
            Filtere die Suchergebnisse nach einem bestimmten String
          </Form.Text>
        </Form.Group>
      </Form>
    </Col>
  );
}
