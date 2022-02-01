import { useState } from "react";
import { CheckOutSummary } from "../../components/checkOutSunmmary/checkOutSummary";

function CheckOut() {
  const [{ ingredients }, setstate] = useState({
    ingredients: {
      salad: 1,
      cheese: 1,
      bacon: 1,
      meat: 1,
    },
  });
  return (
    <div>
      <CheckOutSummary ingredients={ingredients} />
    </div>
  );
}

export { CheckOut };
