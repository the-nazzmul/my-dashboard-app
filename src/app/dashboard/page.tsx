import Card from "@/components/dashboard/card/Card";
import styles from "./dashboard.module.css";
import Rightbar from "@/components/dashboard/rightbar/Rightbar";
import Transactions from "@/components/dashboard/transactions/Transactions";
import Chart from "@/components/dashboard/chart/Chart";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
