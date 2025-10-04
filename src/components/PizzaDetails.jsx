import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import convertedAmount from "../utils/convert";
import { Container } from "react-bootstrap";

const PizzaDetails = (props) => {
  return (
    <div >

    <div className="d-flex justify-content-center align-items-center">
      <Container className="container-cart m-0">
        <Card className="container p-0">
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>Pizza {props.name?.charAt().toUpperCase() + props.name?.slice(1)}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Text className="m-0 fs-5 fw-light">Ingredientes: {props.ingredients?.join(", ")}</Card.Text>
            <p className="fs-4 fw-bold pt-2 text-center">Precio: ${convertedAmount(props.price)}</p>
            <Button className="d-block ms-auto" variant="dark">Añadir 🛒</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
    </div>
  );
};

export default PizzaDetails;
