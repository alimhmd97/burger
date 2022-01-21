import styles from "./button.module.css";
function button({ btnType, children, clicked }) {
  return (
    <button
      className={[styles.Button, styles[btnType]].join(" ")}
      onClick={clicked}>
      {children}
    </button>
  );
}

export default button;
