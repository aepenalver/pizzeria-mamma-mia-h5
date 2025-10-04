import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import convertedAmount from "../utils/convert";

const CardPizza = (props) => {
  return (
    <Card className="p-0">
      <Card.Img className="card-img" variant="top" src={props.img} alt={props.name} />
      <Card.Body className="p-0 pb-3">
        <Card.Title className="text-start p-3 m-0 fs-3 fw-bold">Pizza {props.name.charAt().toUpperCase() + props.name.slice(1)}</Card.Title>
        <div className="pt-2 pb-3 m-0 border-top border-bottom text-center">
          <Card.Text className="m-0 fs-5 fw-light">Ingredientes:</Card.Text>
          <Card.Text>
            {props.ingredients?.map((ingredient, index) => (
              <li className="li-ingredients text-start px-5" key={index}>
                {ingredient.charAt().toUpperCase() + ingredient.slice(1)}
              </li>
            ))}
          </Card.Text>
        </div>
        <p className="fs-4 fw-bold pt-2 text-center">Precio: ${convertedAmount(props.price)}</p>
        <div className="btn-box d-flex justify-content-around">
          <Button variant="outline-dark">Ver Más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
