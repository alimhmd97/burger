import LogoImage from "../../assets/images/burger-logo.png";
import styles from "./Logo.module.css";
function logo() {
  return (
    <div className={styles.Logo}>
      <img src={LogoImage} alt='burger-logo' />
    </div>
  );
}

export default logo;
