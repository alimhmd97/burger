import styles from "./buildControl.module.css";
const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl_container}>
      <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <div className={styles.buttons}>
          {" "}
          <button
            className={styles.Less}
            onClick={props.remove}
            disabled={props.disabled}>
            less
          </button>
          <button className={styles.More} onClick={props.added}>
            more
          </button>
        </div>
      </div>
    </div>
  );
};
export default BuildControl;
