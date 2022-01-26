import styles from "./modal.module.css";
import BackDrop from "../backDrop/backDrop";

import Aux from "../../HOC/Auxx";
function modal(props) {
  return (
    <Aux>
      <BackDrop show={props.show} clicked={props.cancelPurchase} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0,
        }}>
        {props.children}
      </div>
    </Aux>
  );
}

export default modal;
