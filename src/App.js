import Layout from "./components/LayOut/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import "./App.css";
import CheckOut from "./containers/checkOut/checkOut";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<BurgerBuilder />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>
    </Layout>
  );
}

export default App;
