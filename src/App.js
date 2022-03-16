import Layout from "./components/LayOut/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import "./App.css";
import CheckOut from "./containers/checkOut/checkOut";
import { Routes, Route } from "react-router-dom";
import { Orders } from "./containers/checkOut/orders/orders";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Reducer } from "./store/reducers";
function App() {
  return (
    <Provider store={createStore(Reducer)}>
      <Layout>
        <Routes>
          <Route path='/' element={<BurgerBuilder />} />
          <Route path='/checkout' element={<CheckOut />} />{" "}
          <Route path={"/orders"} element={<Orders />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
