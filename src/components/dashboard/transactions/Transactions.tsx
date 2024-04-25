import Image from "next/image";
import styles from "./Transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                />
                John Cena
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>26.04.2024</td>
            <td>$8.2</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                />
                John Cena
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>26.04.2024</td>
            <td>$8.2</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                />
                John Cena
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>26.04.2024</td>
            <td>$8.2</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                />
                John Cena
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>26.04.2024</td>
            <td>$8.2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
