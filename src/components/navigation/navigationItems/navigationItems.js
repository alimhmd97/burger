import styles from "./navigationItems.module.css";
import NavigatioItem from "./navigationItem";
function navigationItems() {
  return (
    <ul className={styles.NavigationItems}>
      <NavigatioItem URL='/' active={true}>
        burger builder
      </NavigatioItem>

      <NavigatioItem URL='/orders'>ORDERS</NavigatioItem>
    </ul>
  );
}

export default navigationItems;
