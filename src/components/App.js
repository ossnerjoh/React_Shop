import { useState, useEffect } from "react";
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
import WarenkorbPage from "../pages/WarenkorbPage";

export default function App() {
  //products to render -------------------------
  let productsBackUp = initialProducts;
  const [products, setProducts] = useState([]);

  useState(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

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

  //products in Cart
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
  ]);
  function addToCart(id) {
    setCartItems([...cartItems, ...products.filter((p) => p.id === id)]);
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
                  <WarenkorbPage cartItems={cartItems} />
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
