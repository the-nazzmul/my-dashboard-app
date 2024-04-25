"use client";

import styles from "./MenuLink.module.css";
import Link from "next/link";
import { IMenuLink } from "@/types/Types";
import { usePathname } from "next/navigation";

const MenuLink: React.FC<IMenuLink> = ({ path, icon, title }) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`${styles.container} ${pathname === path && styles.active}`}
    >
      {icon}
      {title}
    </Link>
  );
};

export default MenuLink;
