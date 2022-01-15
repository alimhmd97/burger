import { useState } from "react";

import Burger from "../../components/burger/burger";
const BurgerBuilder = (props) => {
  const [A, setA] = useState({
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  });

  return (
    <>
      <div>kk</div>
      <Burger ingredients={A.ingredients} />
      <main>{props.children}</main>
    </>
  );
};
export default BurgerBuilder;
