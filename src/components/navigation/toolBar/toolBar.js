import styles from "./toolBar.module.css";
import Logo from "../../Logo/logo";
import NavigationItems from "../navigationItems/navigationItems";
function toolBar() {
  return (
    <header className={styles.ToolBar}>
      <div>MENU</div>

      <Logo />

      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default toolBar;
