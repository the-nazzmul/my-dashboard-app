import { MenuItems } from "@/utils/MenuItems";
import styles from "./Sidebar.module.css";
import MenuLink from "./menuLink/MenuLink";
import { IconType } from "react-icons";
import Image from "next/image";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={"/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>John Cena</span>
          <span className={styles.userRole}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {MenuItems.map((category) => (
          <li key={category.title}>
            <span className={styles.category}>{category.title}</span>
            {category.list.map((item) => (
              <MenuLink
                key={item.title}
                icon={item.icon}
                title={item.title}
                path={item.path}
              />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
