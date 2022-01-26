import Aux from "../HOC/Auxx";
import styles from "./LayOut.module.css";
import ToolBar from "../navigation/toolBar/toolBar";
import SideDrawer from "../navigation/sideDrawer/sideDrawer";
import { useState } from "react";
const Layout = (props) => {
  const [showSideDrawer, setshowSideD] = useState(false);
  const sideDrawerCloseHandler = () => {
    setshowSideD(false);
  };
  const sideDrawerOpenHandler = () => {
    setshowSideD(true);
  };
  return (
    <Aux>
      <ToolBar openSideDrawer={sideDrawerOpenHandler} />
      <SideDrawer show={showSideDrawer} close={sideDrawerCloseHandler} />
      <div className={styles.LayOut}></div>
      <main>{props.children}</main>
    </Aux>
  );
};
export default Layout;
