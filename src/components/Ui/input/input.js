import styles from "./input.module.css";
function input({
  value,
  label,
  elementType,
  config,
  change,
  isValid,
  shouldValidate,
  touched,
}) {
  let inputElement = null;
  const inputClasses = [styles.InputElement];
  if (!isValid && shouldValidate && touched) inputClasses.push(styles.Invalid);
  switch (elementType) {
    case "input":
      inputElement = (
        <input
          value={value}
          className={inputClasses.join(" ")}
          placeholder={config.placeholder}
          type={config.type}
          onChange={change}
        />
      );
      break;

    case "textarea":
      inputElement = (
        <textarea
          onChange={change}
          value={value}
          className={styles.InputElement}
          placeholder={config.placeholder}
          type={config.type}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          onChange={change}
          value={value}
          className={styles.InputElement}
          placeholder={config.placeholder}>
          {config.options.map((option) => {
            return (
              <option key={option.displayValue}>{option.displayValue}</option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <textarea
          onChange={change}
          value={value}
          className={styles.InputElement}
          placeholder={config.placeholder}
          type={config.type}
        />
      );
  }
  return (
    <div className={styles.Input}>
      <label className={styles.Lable}>{label}</label>
      {inputElement}
    </div>
  );
}

export default input;
