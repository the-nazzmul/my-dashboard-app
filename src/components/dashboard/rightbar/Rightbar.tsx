import Image from "next/image";
import styles from "./Rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Avilable Now</span>
          <h3 className={styles.title}>
            How to use the new ersion of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa
            perferendis quod porro magni dolorum voluptate commodi autem
            voluptas exercitationem?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa
            perferendis quod porro magni dolorum voluptate commodi autem
            voluptas exercitationem?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
