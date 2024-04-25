import Navbar from "@/components/dashboard/navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import styles from "../dashboard/dashboard.module.css";
import Footer from "@/components/dashboard/footer/Footer";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
