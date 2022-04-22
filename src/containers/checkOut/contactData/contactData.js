import { useState } from "react";
import styles from "./contactData.module.css";
import Button from "../../../components/Ui/button/button";
import axios from "../../../axios-orders";
import { withRouter } from "../../../components/HOC/withRouter/withRouter";
import Spinner from "../../../components/Ui/spinner/spinner";
import Input from "../../../components/Ui/input/input";
import { connect } from "react-redux";

 let formIsValid = true;

function ContactData({ ingredients, totalPrice, history }) {
  const [loading, setloading] = useState(false);
  const formData = {};

  const [name, setName] = useState({
    id: "name",
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "yourName",
    },
    value: "",
    touched: false,
    touched: false,
    validation: { required: true, minLength: 5, maxLength: 10 },
    valid: false,
  });
  const [street, setStreet] = useState({
    id: "street",
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "street",
    },
    value: "",
    touched: false,
    validation: { required: true },
    valid: false,
  });
  const [zipCode, setZipCode] = useState({
    id: "zipCode",

    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "zipCode",
    },
    value: "",
    touched: false,
    validation: { required: true },
    valid: false,
  });
  const [country, setCountry] = useState({
    id: "country",

    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "country",
    },
    value: "",
    touched: false,
    validation: { required: true },
    valid: false,
  });
  const [email, setEmail] = useState({
    id: "email",
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "email",
    },
    value: "",
    touched: false,
    validation: { required: true },
    valid: false,
  });
  const [delivaryMethod, setDelivaryMethod] = useState({
    id: "delivaryMethod",

    elementType: "select",
    elementConfig: {
      options: [
        { value: "fastest", displayValue: "Fastest" },
        { value: "cheepest", displayValue: "cheepest" },
      ],
    },
    value: "",
    valid: true,
  });
  const orderFormArray = [
    name,
    email,
    zipCode,
    country,
    street,
    delivaryMethod,
  ];
  let order = {};
  const orderMaker = () => {
    orderFormArray.map((orderFormArrayElement, i) => {
      formData[orderFormArrayElement.id] = orderFormArrayElement.value;
      formData[orderFormArrayElement.id] = orderFormArrayElement.value;
      // formData["valid"] = checkValidty(
      //   orderFormArrayElement.value,
      //   orderFormArrayElement.validation
      // );
    });
    order = { ...formData, ingredients, totalPrice };
  };
  const orderHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    orderMaker();
    try {
      await axios.post("/orders.json", order);
    } catch (e) {
      alert(e);
    }
    setloading(false);

    history.navigate("/");
  };
 
  const inputChangeHandler = (e, inputIdintfier) => {
    e.preventDefault();

    if (inputIdintfier === "name") {
      setName((state) => ({
        ...state,
        value: e.target.value,
        valid: checkValidty(e.target.value, name.validation),
        touched: true,
      }));
    }
    if (inputIdintfier === "zipCode") {
      setZipCode((state) => ({
        ...state,
        value: e.target.value,
        valid: checkValidty(e.target.value, name.validation),
        touched: true,
      }));
    }
    if (inputIdintfier === "country") {
      setCountry((state) => ({
        ...state,
        value: e.target.value,
        valid: checkValidty(e.target.value, country.validation),
        touched: true,
      }));
    }
    if (inputIdintfier === "street") {
      setStreet((state) => ({
        ...state,
        value: e.target.value,
        valid: checkValidty(e.target.value, street.validation),
        touched: true,
      }));
    }
    if (inputIdintfier === "email") {
      setEmail((state) => ({
        ...state,
        value: e.target.value,
        valid: checkValidty(e.target.value, email.validation),
        touched: true,
      }));
    }
    if (inputIdintfier === "delivaryMethod") {
      setDelivaryMethod((state) => ({
        ...state,
        value: e.target.value,
      }));
    }
    orderFormArray.map((elem) => {
      // console.log(formIsValid);
      formIsValid = elem.valid && formIsValid;
    });
  };
  const checkValidty = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value?.trim() !== "" && isValid;
      // console.log("require", isValid);
    }
    if (rules.minLength) {
      isValid = value?.length >= rules.minLength && isValid;
      // console.log("minLength", isValid);
    }
    if (rules.maxLength) {
      isValid = value?.length <= rules.maxLength && isValid;
      // console.log("MaxLength", value.length);
    }
    // console.log("isvalid" + isValid);
    return isValid;
  };
  return (
    <div className={styles.ContactData1}>
      {" "}
      <h4>Enter your contact data </h4>
      {!loading ? (
        <form onSubmit={orderHandler}>
          {orderFormArray.map((formElement) => {
            return (
              <Input
                config={formElement.elementConfig}
                value={formElement.value}
                key={formElement.id}
                elementType={formElement.elementType}
                change={(e) => inputChangeHandler(e, formElement.id)}
                isValid={formElement.valid}
                shouldValidate={formElement.validation}
                touched={formElement.touched}
              />
            );
          })}

          <Button btnType='Success' disabled={formIsValid}>
            ORDER
          </Button>
        </form>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  };
};

export default connect(mapStateToProps)(withRouter(ContactData));
