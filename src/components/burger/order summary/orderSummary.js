import Aux from "../../HOC/Auxx";
function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
        {props.ingredients[igkey]}{" "}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
    </Aux>
  );
}

export default OrderSummary;
