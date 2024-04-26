"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./Pagination.module.css";

const Pagination = ({ count }: { count: number }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (Number(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (Number(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: string) => {
    const currentPage = parseInt(page as string) || 1;
    const newPage = type === "prev" ? currentPage - 1 : currentPage + 1;
    params.set("page", String(newPage));
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
