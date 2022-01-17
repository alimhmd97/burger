import styles from "./buildControl.module.css";
const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.label}>{props.label}</div>
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
  );
};
export default BuildControl;
