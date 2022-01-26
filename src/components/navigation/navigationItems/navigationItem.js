import styles from "./navigationItem.module.css";
function navigationItem({ children, link, active }) {
  return (
    <li className={styles.NavigationItem}>
      <a href={link} className={active ? styles.active : null}>
        {children}
      </a>
    </li>
  );
}

export default navigationItem;
