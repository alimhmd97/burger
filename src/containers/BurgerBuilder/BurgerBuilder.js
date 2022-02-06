import { useEffect, useMemo, useState } from "react";
import BuildControls from "../../components/burger/buildControls/buildControls";
import Modal from "../../components/Ui/modal/modal";
import Burger from "../../components/burger/burger";
import OrderSummary from "../../components/burger/order/order summary/orderSummary";
import Aux from "../../components/HOC/Auxx";
import axios from "../../axios-orders";
import Spinner from "../../components/Ui/spinner/spinner";
import { withRouter } from "../../components/HOC/withRouter/withRouter";

const BurgerBuilder = ({ children, history, match }) => {
  const [
    { ingredients, totalPrice, purchasable, purchase, loading },
    setState,
  ] = useState({
    ingredients: null,
    totalPrice: 0,
    purchasable: false,
    purchase: false,
    loading: true,
  });

  const ingredientPrice = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
  };

  // const purchaseContinueHandler = () => {

  const PurchaseContinueHandler = () => {
    // setState((state) => ({ ...state, loading: true }));

    const queryParams = [];
    for (let i in ingredients) {
      queryParams.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(ingredients[i])
      );
    }
    queryParams.push("totalPrice" + "=" + totalPrice);

    const queryString = queryParams.join("&");
    history.navigate(`/checkout?${queryString}`);

    // match.params(queryString)
  };

  const PurchaseCancelHandler = () => {
    setState((state) => ({ ...state, purchase: false }));
  };

  const updatePurchaseState = (ingredients) => {
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
    ...ingredients,
  };
  for (let key in disableInfo) {
    disableInfo[key] = disableInfo[key] <= 0;
  }

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredient = { ...ingredients };
    updatedIngredient[type] = newCount;
    const oldPrice = totalPrice;
    const newPrice = oldPrice + ingredientPrice[type];
    setState((state) => ({
      ...state,
      totalPrice: newPrice,
      ingredients: updatedIngredient,
    }));
    updatePurchaseState(updatedIngredient);
  };

  const removeIngredientHandler = (type) => {
    if (ingredients[type] <= 0) return;
    const oldCount = ingredients[type];
    const newCount = oldCount - 1;
    const updatedIngredient = { ...ingredients };
    updatedIngredient[type] = newCount;
    const oldPrice = totalPrice;
    const newPrice = oldPrice - ingredientPrice[type];
    setState((state) => ({
      ...state,
      totalPrice: newPrice,
      ingredients: updatedIngredient,
    }));
    updatePurchaseState(updatedIngredient);
  };
  const addPurchaseHandler = () => {
    setState((state) => ({ ...state, purchase: true }));
  };
  useEffect(() => {
    axios
      .get("ingredients.json")
      .then((res) => {
        setState((state) => ({ ...state, ingredients: res.data }));
        // console.log(res.data);
      })
      .catch((err) => alert(err));
    setState((state) => ({ ...state, loading: false }));
  }, []);

  let orderSummary = useMemo(
    () =>
      ingredients && (
        <Modal show={purchase} cancelPurchase={PurchaseCancelHandler}>
          <OrderSummary
            ingredients={ingredients}
            cancelPurchase={PurchaseCancelHandler}
            continuePurchase={PurchaseContinueHandler}
            price={totalPrice.toFixed(2)}
          />
        </Modal>
      ),
    [purchase]
  );
  let burger = null;
  if (ingredients) {
    burger = (
      <Aux>
        <Modal></Modal> <Burger ingredients={ingredients} />
        <BuildControls
          addIngredients={addIngredientHandler}
          removeIngredients={removeIngredientHandler}
          disabled={disableInfo}
          price={totalPrice}
          purchasable={purchasable}
          parchasingHandler={addPurchaseHandler}
        />
      </Aux>
    );
  }

  return (
    <Aux>
      {loading ? <Spinner /> : ingredients ? orderSummary : null}
      {burger}
      <main>{children}</main>
    </Aux>
  );
};
export default withRouter(BurgerBuilder);
