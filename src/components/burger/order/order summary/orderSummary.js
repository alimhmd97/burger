import Aux from "../../../HOC/Auxx";
import Button from "../../../Ui/button/button";
function OrderSummary({
  ingredients,
  cancelPurchase,
  continuePurchase,
  price,
}) {
  const ingredientSummary = Object.keys(ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
        {ingredients[igkey]}{" "}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>TotalPrice:{price}</strong>
      </p>
      <Button clicked={cancelPurchase} btnType='Danger'>
        cancel
      </Button>
      <Button clicked={continuePurchase} btnType='Success'>
        continue
      </Button>
    </Aux>
  );
}

export default OrderSummary;
