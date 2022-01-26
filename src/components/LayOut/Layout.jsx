import Aux from "../HOC/Auxx";
import styles from "./LayOut.module.css";
import ToolBar from "../navigation/toolBar/toolBar";
const Layout = (props) => {
  return (
    <Aux>
      <ToolBar />
      <div className={styles.LayOut}></div>
      <main>{props.children}</main>
    </Aux>
  );
};
export default Layout;
