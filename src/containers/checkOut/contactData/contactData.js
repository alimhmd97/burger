import { useState } from "react";
import styles from "./contactData.module.css";
import Button from "../../../components/Ui/button/button";
import axios from "../../../axios-orders";
import { withRouter } from "../../../components/HOC/withRouter/withRouter";
import Spinner from "../../../components/Ui/spinner/spinner";
function ContactData({ ingredients, totalPrice, history }) {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    dress: {
      postalCode: "",
      street: "",
    },
  });
  const [loading, setloading] = useState(false);
  const orderHandler = (e) => {
    e.preventDefault();
    setloading(true);
    const order = {
      price: totalPrice,
      ingredients: ingredients,
      name: "Ali Mohamed",
      adress: {
        street: "testStreet",
        zipCode: "54512",
        country: "Egypt",
      },
      email: "aliiimhmddd99@gmail.com",
      delivaryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((res) => setloading(true))
      .catch((err) => setloading(true));
    history.navigate("/");
  };
  return (
    <div className={styles.ContactData1}>
      {" "}
      <h4>Enter your contact data </h4>
      {!loading ? (
        <form>
          <input type='text' name='name' placeholder='name' />
          <input type='email' name='email' placeholder='email' />
          <input type='text' name='postalCode' placeholder='postalCode' />
          <input type='text' name='street' placeholder='street' />
          <Button btnType='Success' clicked={orderHandler}>
            ORDER
          </Button>
        </form>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
}

export default withRouter(ContactData);
