import { element } from "prop-types";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CheckOutSummary } from "../../components/checkOutSunmmary/checkOutSummary";
import { withRouter } from "../../components/HOC/withRouter/withRouter";
import ContactData from "./contactData/contactData";

function CheckOut({ history }) {
  const [mounted, setMounted] = useState(false);

  const [ingredients, setingredients] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  if (!mounted) {
    let query = window.location.search.slice(1).split("&");
    let ingredientsColection = [];
    query.map((elem) => {
      if (elem.includes("totalPrice")) {
        let price = elem.slice(elem.indexOf("=") + 1);

        setTotalPrice(price);
      } else {
        ingredientsColection.push(elem.split("="));
      }
    });
    // console.log(y);
    const ingredient = {};
    ingredientsColection.map((element) => {
      ingredient[element[0]] = +element[1];
    });
    setingredients({ ...ingredient });
    setMounted(true);
  }

  useEffect(() => {}, []);

  const checkOutCanceledHandler = () => {
    history.back();
  };
  const checkOutContinuedHandler = () => {
    history.navigate("/checkout/contact-data");
  };
  console.log(Route);
  return (
    <div>
      <CheckOutSummary
        checkOutContinued={checkOutContinuedHandler}
        checkOutCanceled={checkOutCanceledHandler}
        ingredients={ingredients}
      />
      {/* <Routes>
        <Route
          path={"/checkout/contact-data"}
          element={
            <ContactData ingredients={ingredients} totalPrice={totalPrice} />
          }
        />
      </Routes> */}
      {<ContactData ingredients={ingredients} totalPrice={totalPrice} />}
    </div>
  );
}

export default withRouter(CheckOut);
