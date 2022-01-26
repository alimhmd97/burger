import Logo from "../../Logo/logo";
import NavigationItems from "../navigationItems/navigationItems";
import styles from "./sideDrawer.module.css";
import Aux from "../../HOC/Auxx";
import BackDrop from "../../Ui/backDrop/backDrop";
function sideDrawer({ show, close }) {
  let classes = [styles.SideDrawer, styles.Close];
  if (show) {
    classes = [styles.SideDrawer, styles.Open];
  }
  return (
    <Aux className={show ? styles.Open : styles.Close}>
      <BackDrop show={show} clicked={close} />
      <div className={classes.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default sideDrawer;
