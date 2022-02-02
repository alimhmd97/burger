import { Link } from "react-router-dom";
import styles from "./navigationItem.module.css";
function navigationItem({ children, link, active }) {
  return (
    <li className={styles.NavigationItem}>
      <Link to={link} className={active ? styles.active : null}>
        {children}
      </Link>
    </li>
  );
}

export default navigationItem;
