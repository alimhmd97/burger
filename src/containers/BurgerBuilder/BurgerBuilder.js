import { useState } from "react";
import BuildControls from "../../components/burger/buildControls/buildControls";

import Burger from "../../components/burger/burger";
const BurgerBuilder = (props) => {
  const [state, setState] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
  });
  const ingredientPrice = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
  };

  let disableInfo = {
    ...state.ingredients,
  };
  for (let key in disableInfo) {
    disableInfo[key] = disableInfo[key] <= 0;
  }

  const addIngredientHandler = (type) => {
    const oldCount = state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredient = { ...state.ingredients };
    updatedIngredient[type] = newCount;
    const oldPrice = state.totalPrice;
    const newPrice = oldPrice + ingredientPrice[type];
    setState({ totalPrice: newPrice, ingredients: updatedIngredient });
  };
  const removeIngredientHandler = (type) => {
    if (state.ingredients[type] <= 0) return;
    const oldCount = state.ingredients[type];
    const newCount = oldCount - 1;
    const updatedIngredient = { ...state.ingredients };
    updatedIngredient[type] = newCount;
    const oldPrice = state.totalPrice;
    const newPrice = oldPrice - ingredientPrice[type];
    setState({ totalPrice: newPrice, ingredients: updatedIngredient });
  };
  return (
    <>
      <Burger ingredients={state.ingredients} />
      <BuildControls
        add={addIngredientHandler}
        remove={removeIngredientHandler}
        disabled={disableInfo}
        price={state.totalPrice}
      />

      <main>{props.children}</main>
    </>
  );
};
export default BurgerBuilder;
