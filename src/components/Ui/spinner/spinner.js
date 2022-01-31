import styles from "./spinner.module.css";
import { BeatLoader } from "react-spinners";
const spinner = () => {
  return (
    <div className={styles.Spinner}>
      {/* <BounceLoader /> */}
      {/* <BarLoader /> */}
      <BeatLoader />
    </div>
  );
};

export default spinner;
