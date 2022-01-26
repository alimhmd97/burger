import styles from "./toolBar.module.css";
import Logo from "../../Logo/logo";
import NavigationItems from "../navigationItems/navigationItems";
function toolBar({ openSideDrawer }) {
  return (
    <header className={styles.ToolBar}>
      <div className={styles.DrawerToggle} onClick={openSideDrawer}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.Logo}>
        {" "}
        <Logo />
      </div>

      <nav className={styles.DeskTopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default toolBar;
