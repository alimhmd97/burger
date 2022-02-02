import { useEffect, useState } from "react";
import { CheckOutSummary } from "../../components/checkOutSunmmary/checkOutSummary";
import { withRouter } from "../../components/HOC/withRouter/withRouter";

function CheckOut({ history }) {
  const [ingredients, setingredients] = useState({});
  useEffect(() => {
    let query = window.location.search.slice(1).split("&");
    let y = [];
    query.map((elem) => {
      y.push(elem.split("="));
    });
    // console.log(y);
    const ingredient = {};
    y.map((element) => {
      ingredient[element[0]] = +element[1];
    });
    setingredients({ ...ingredient });
  }, []);

  const checkOutCanceledHandler = () => {
    history.back();
  };
  const checkOutContinuedHandler = () => {
    history.navigate("/checkout/contact-data");
  };

  return (
    <div>
      <CheckOutSummary
        checkOutContinued={checkOutContinuedHandler}
        checkOutCanceled={checkOutCanceledHandler}
        ingredients={ingredients}
      />
    </div>
  );
}

export default withRouter(CheckOut);
