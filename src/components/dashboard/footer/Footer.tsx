import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>The Nazzmul</div>
      <div className={styles.texts}>©All rights reserved.</div>
    </div>
  );
};

export default Footer;
