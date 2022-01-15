import styles from "./burger.module.css";
import BurgerIngredient from "./burgerIngredients/burgerIngredients";
const Burger = (props) => {
  const transformedIngredient = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    });
  console.log(typeof transformedIngredient);
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredient.length > 0
        ? transformedIngredient
        : "please start adding gredients"}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
