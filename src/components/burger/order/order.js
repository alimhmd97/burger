import styles from "./order.module.css";
function Order({ ingredients, price }) {
  const optmisedIngredient = Object.entries(ingredients);
  let x = optmisedIngredient.map((ingredient, i) => {
    return (
      <span className={styles.Ingredients} key={i}>
        {ingredient[0]} : {ingredient[1]}
      </span>
    );
  });
  return (
    <div className={styles.Order}>
      {optmisedIngredient?.map((elem) => {})}{" "}
      <p>
        <span className={styles.Ingredients}>ingredients</span>:{x}
      </p>
      <p>price: {price.toFixed(2)}</p>
    </div>
  );
}

export { Order };
