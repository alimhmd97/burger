import styles from "./button.module.css";
function button({ btnType, children, clicked, disabled }) {
  console.log(disabled);
  return (
    <button
      disabled={disabled}
      className={[styles.Button, styles[btnType]].join(" ")}
      onClick={clicked}>
      {children}
    </button>
  );
}

export default button;
