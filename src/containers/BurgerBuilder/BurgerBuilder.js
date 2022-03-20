import { useEffect, useMemo, useState } from "react";
import BuildControls from "../../components/burger/buildControls/buildControls";
import Modal from "../../components/Ui/modal/modal";
import Burger from "../../components/burger/burger";
import OrderSummary from "../../components/burger/order/order summary/orderSummary";
import Aux from "../../components/HOC/Auxx";
import axios from "../../axios-orders";
import Spinner from "../../components/Ui/spinner/spinner";
import { withRouter } from "../../components/HOC/withRouter/withRouter";
import * as burgerBuilderActions from "../../store/actions/burgerBuilder";
import { connect } from "react-redux";

const BurgerBuilder = ({
  children,
  history,
  match,
  ings,
  onIngredientAdded,
  onIngredientaRemoved,
  totalPrice,
}) => {
  const [{ purchasable, purchase, loading }, setState] = useState({
    purchasable: false,
    purchase: false,
    loading: false,
  });

  // const purchaseContinueHandler = () => {

  const PurchaseContinueHandler = () => {
    // // setState((state) => ({ ...state, loading: true }));

    // const queryParams = [];
    // for (let i in ings) {
    //   queryParams.push(
    //     encodeURIComponent(i) + "=" + encodeURIComponent(ings[i])
    //   );
    // }
    // queryParams.push("totalPrice" + "=" + totalPrice);

    // const queryString = queryParams.join("&");
    history.navigate("/checkout");

    // match.params(queryString)
  };

  const PurchaseCancelHandler = () => {
    setState((state) => ({ ...state, purchase: false }));
  };

  const updatePurchaseState = (ings) => {
    let sumOfIngredientsComponents = 0;
    for (let key in ings) {
      sumOfIngredientsComponents += ings[key];
    }

    return sumOfIngredientsComponents > 0;
  };
  let disableInfo = {
    ...ings,
  };
  for (let key in disableInfo) {
    disableInfo[key] = disableInfo[key] <= 0;
  }

  const addPurchaseHandler = () => {
    setState((state) => ({ ...state, purchase: true }));
  };
  useEffect(() => {
    // axios
    //   .get("ingredients.json")
    //   .then((res) => {
    //     setState((state) => ({ ...state, ingredients: res.data }));
    //     // console.log(res.data);
    //   })
    //   .catch((err) => alert(err));
    // setState((state) => ({ ...state, loading: false }));
  }, []);

  let orderSummary = useMemo(
    () =>
      ings && (
        <Modal show={purchase} cancelPurchase={PurchaseCancelHandler}>
          <OrderSummary
            ingredients={ings}
            cancelPurchase={PurchaseCancelHandler}
            continuePurchase={PurchaseContinueHandler}
            price={totalPrice.toFixed(2)}
          />
        </Modal>
      ),
    [purchase]
  );
  let burger = null;
  if (ings) {
    burger = (
      <Aux>
        <Modal></Modal> <Burger ingredients={ings} />
        <BuildControls
          addIngredients={onIngredientAdded}
          removeIngredients={onIngredientaRemoved}
          disabled={disableInfo}
          price={totalPrice}
          purchasable={updatePurchaseState(ings)}
          parchasingHandler={addPurchaseHandler}
        />
      </Aux>
    );
  }

  return (
    <Aux>
      {loading ? <Spinner /> : ings ? orderSummary : null}
      {burger}
      <main>{children}</main>
    </Aux>
  );
};
const mapStateToProps = (state) => {
  return { ings: state.ingredients, totalPrice: state.totalPrice };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => {
      dispatch(burgerBuilderActions.addIingredient(ingName));
    },
    onIngredientaRemoved: (ingName) => {
      dispatch(burgerBuilderActions.rermoveIingredient(ingName));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BurgerBuilder));
