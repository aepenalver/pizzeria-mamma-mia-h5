import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import convertedAmount from "../utils/convert";
import { pizzaCart } from "../utils/pizzas";
import NavMenu from "../components/Navbar";

const Cart = () => {
  const [pizzas, setPizzas] = useState(pizzaCart.map((pizza) => ({ ...pizza, qty: 1 })));

  const updateQty = (id, ops) => {
    setPizzas((prev) => prev.map((pizza) => (pizza.id === id ? { ...pizza, qty: pizza.qty + ops } : pizza)).filter((pizza) => pizza.qty > 0));
  };

  const total = pizzas.reduce((acc, pizza) => acc + pizza.price * pizza.qty, 0);

  return (
    <>
      <NavMenu />
      <div className="d-flex justify-content-center align-items-center p-5">
        <Container className="container-cart m-0">
          <h1>Detalles del pedido:</h1>
          <Container className="container-cart-detail d-flex flex-column gap-2 mt-3 mb-4 p-0">
            {pizzas.length === 0 ? (
              <Alert key="danger" variant="danger">
                Tu carrito está vacío 🛒
              </Alert>
            ) : (
              pizzas.map((pizza) => (
                <Row className="d-flex align-items-center gap-3" key={pizza.id}>
                  <Col xs={1}>
                    <Image className="img-cart" src={pizza.img} alt={pizza.name} rounded />
                  </Col>
                  <Col xs={3} className="m-0 ps-3">
                    {pizza.name.charAt().toUpperCase() + pizza.name.slice(1)}
                  </Col>
                  <Col className="m-0 text-end">${convertedAmount(pizza.price * pizza.qty)}</Col>
                  <Col xs={1} className="p-0 text-center">
                    <Button variant="outline-danger" onClick={() => updateQty(pizza.id, -1)}>
                      -
                    </Button>
                  </Col>
                  <Col xs={1} className="m-0 text-center p-0">
                    {pizza.qty}
                  </Col>
                  <Col xs={1} className="p-0 text-center">
                    <Button variant="outline-info" onClick={() => updateQty(pizza.id, 1)}>
                      +
                    </Button>
                  </Col>
                </Row>
              ))
            )}
          </Container>
          <p className="fs-3 fw-bold">Total: ${convertedAmount(total)}</p>
          <Button variant="dark" disabled={pizzas.length === 0}>
            Pagar
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Cart;
