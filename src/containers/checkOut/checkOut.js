import { element } from "prop-types";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CheckOutSummary } from "../../components/checkOutSunmmary/checkOutSummary";
import { withRouter } from "../../components/HOC/withRouter/withRouter";
import ContactData from "./contactData/contactData";
import { connect } from "react-redux";
function CheckOut({ history, ingredients }) {
  useEffect(() => {}, []);

  const checkOutCanceledHandler = () => {
    history.back();
  };
  const checkOutContinuedHandler = () => {
    history.navigate("/checkout/contact-data");
  };
  // console.log(Route);
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
            <ContactData />
          }
        />
      </Routes> */}
      {<ContactData />}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};
export default connect(mapStateToProps)(withRouter(CheckOut));
