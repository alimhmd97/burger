import { useState } from "react";
import BuildControls from "../../components/burger/buildControls/buildControls";
import Modal from "../../components/Ui/modal/modal";
import Burger from "../../components/burger/burger";
import OrderSummary from "../../components/burger/order summary/orderSummary";
import Aux from "../../components/HOC/Auxx";
const BurgerBuilder = (props) => {
  const [state, setState] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasable: false,
    parchase: false,
  });
  const ingredientPrice = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
  };
  const parchaseCancelHandler = () => {
    setState((state) => ({ ...state, parchase: false }));
  };
  const updateParchaseState = (ingredients) => {
    let sumOfIngredientsComponents = 0;
    for (let key in ingredients) {
      sumOfIngredientsComponents += ingredients[key];
    }
    setState((state) => ({
      ...state,
      purchasable: sumOfIngredientsComponents > 0,
    }));
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
    setState((state) => ({
      ...state,
      totalPrice: newPrice,
      ingredients: updatedIngredient,
    }));
    updateParchaseState(updatedIngredient);
  };

  const removeIngredientHandler = (type) => {
    if (state.ingredients[type] <= 0) return;
    const oldCount = state.ingredients[type];
    const newCount = oldCount - 1;
    const updatedIngredient = { ...state.ingredients };
    updatedIngredient[type] = newCount;
    const oldPrice = state.totalPrice;
    const newPrice = oldPrice - ingredientPrice[type];
    setState((state) => ({
      ...state,
      totalPrice: newPrice,
      ingredients: updatedIngredient,
    }));
    updateParchaseState(updatedIngredient);
  };
  const addParchaseHandler = () => {
    setState((state) => ({ ...state, parchase: true }));
  };
  return (
    <Aux>
      <Modal show={state.parchase} cancelParchase={parchaseCancelHandler}>
        <OrderSummary ingredients={state.ingredients} />
      </Modal>
      <Burger ingredients={state.ingredients} />
      <BuildControls
        addIngredients={addIngredientHandler}
        removeIngredients={removeIngredientHandler}
        disabled={disableInfo}
        price={state.totalPrice}
        purchasable={state.purchasable}
        parchasingHandler={addParchaseHandler}
      />
      <main>{props.children}</main>
    </Aux>
  );
};
export default BurgerBuilder;
