import Burger from "../burger/burger";
import Button from "../Ui/button/button";
import styels from "./checkOutSummary.module.css";
function CheckOutSummary({ ingredients }) {
  return (
    <div className={styels.CheckOutSummary}>
      <h1>we hope it tastes</h1>
      <div style={{ width: "300px", margin: " auto" }}>
        {" "}
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType='Danger' Clicked>
        CANCLE
      </Button>
      <Button btnType='Success' Clicked>
        CONTINUE
      </Button>
    </div>
  );
}

export { CheckOutSummary };
