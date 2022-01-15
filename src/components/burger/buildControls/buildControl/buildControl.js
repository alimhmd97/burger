import styles from "./buildControl.module.css";
const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.label}>{props.label}</div>
      <button className={styles.Less}>less</button>
      <button className={styles.More}>more</button>;
    </div>
  );
};
