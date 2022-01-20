import styles from "./build.controls.module.css";
import BuildControl from "./buildControl/buildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
];
const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p style={{ margin: "0 auto" }}>
        {" "}
        total price: <strong>{props.price.toFixed(2)}</strong>{" "}
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            added={() => {
              props.addIngredients(ctrl.type);
            }}
            key={ctrl.label}
            label={ctrl.label}
            remove={() => props.removeIngredients(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}{" "}
      <button
        className={styles.OrderButton}
        disabled={!props.purchasable}
        onClick={props.parchasingHandler}>
        Order Now
      </button>
    </div>
  );
};
export default BuildControls;
