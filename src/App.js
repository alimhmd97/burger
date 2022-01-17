import Layout from "./components/LayOut/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import "./App.css";
import BuildControls from "./components/burger/buildControls/buildControls";
function App() {
  return (
    <Layout>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
  );
}

export default App;
