import { useEffect, useState } from "react";
import PizzaDetails from "../components/PizzaDetails";

const Pizza = () => {
  const url = `http://localhost:5000/api/pizzas/p001`;
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPizza(data);
  };

  return (
    <>
      <PizzaDetails key={pizza.id} description={pizza.desc} id={pizza.id} img={pizza.img} ingredients={pizza.ingredients} name={pizza.name} price={pizza.price} />
    </>
  );
};

export default Pizza;
