import Burger from "../burger/burger";
import Button from "../Ui/button/button";
import styels from "./checkOutSummary.module.css";
function CheckOutSummary({ ingredients, checkOutContinued, checkOutCanceled }) {
  return (
    <div className={styels.CheckOutSummary}>
      <h1>we hope it tastes</h1>
      <div style={{ margin: " auto" }}>
        {" "}
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType='Danger' clicked={checkOutCanceled}>
        CANCLE
      </Button>
      <Button btnType='Success' clicked={checkOutContinued}>
        CONTINUE
      </Button>
    </div>
  );
}

export { CheckOutSummary };
