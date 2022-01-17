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
      <p>
        {" "}
        total price: <strong>{props.price.toFixed(2)}</strong>{" "}
      </p>

      {controls.map((ctrl) => {
        return (
          <BuildControl
            added={() => {
              props.add(ctrl.type);
            }}
            key={ctrl.label}
            label={ctrl.label}
            remove={() => props.remove(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
    </div>
  );
};
export default BuildControls;
