import Layout from "./components/LayOut/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import "./App.css";
import CheckOut from "./containers/checkOut/checkOut";
import { Routes, Route } from "react-router-dom";
// import {ContactData} from "./containers/checkOut/contactData/contactData";
// import { useState } from "react";
function App() {
  // const [ingredients, setingredients] = useState({
  //   bacon: 1,
  //   salad: 1,
  //   cheese: 1,
  //   meat: 1,
  // });

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<BurgerBuilder />} />
        <Route path='/checkout' element={<CheckOut />} />{" "}
        {/* <Route
          path={"/checkout/contact-data"}
          element={<ContactData ingredients={ingredients} />}
        /> */}
      </Routes>
    </Layout>
  );
}

export default App;
