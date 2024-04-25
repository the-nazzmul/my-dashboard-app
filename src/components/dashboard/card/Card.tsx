import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>11.834</span>
        <span className={styles.detail}>
          <span className={styles.positive}>11%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
