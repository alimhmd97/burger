import styles from "./navigationItems.module.css";
import NavigatioItem from "./navigationItem";
function navigationItems() {
  return (
    <ul className={styles.NavigationItems}>
      <NavigatioItem link='/' active={true}>
        burger builder
      </NavigatioItem>

      <NavigatioItem link='/checkout'>checkout</NavigatioItem>
    </ul>
  );
}

export default navigationItems;
