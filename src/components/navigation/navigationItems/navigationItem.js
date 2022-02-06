import { NavLink } from "react-router-dom";
import styles from "./navigationItem.module.css";
function navigationItem({ children, URL }) {
  return (
    <li className={styles.NavigationItem} act>
      <NavLink to={URL}>{children}</NavLink>
    </li>
  );
}

export default navigationItem;
