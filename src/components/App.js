import { useState } from "react";
//Data
import initialProducts from "../data/products";

//Custom Components
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import ProductsDisplay from "./ProductsDisplay";

//Pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";

//BS-Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function App() {
  let productsBackUp = initialProducts;
  const [products, setProducts] = useState(initialProducts);

  function filterProductsByCategory(category) {
    if (category === "kein Filter") {
      setProducts(productsBackUp);
    } else {
      setProducts(
        productsBackUp.filter((product) => {
          return product.category === category;
        })
      );
    }
  }

  return (
    <Router>
      <Container fluid>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navigation />
                <Container>
                  <Row className="mt-3 ">
                    <Sidebar
                      handleFilterChange={filterProductsByCategory}
                      products={initialProducts}
                    />
                    <ProductsDisplay products={products} />
                  </Row>
                </Container>
              </>
            }
          />
          <Route
            path="/warenkorb"
            element={
              <>
                <Container>
                  <Navigation />
                  <div>Dies wird meine WarenkorbKomponente</div>
                </Container>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navigation />
                <AboutPage />
              </>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}