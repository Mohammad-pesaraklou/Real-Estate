"use client";

import Link from "next/link";
// styles
import styles from "@/layout/Header.module.scss";

// icons
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";
function Header() {
  const session = useSession();

  return (
    <div className={styles.header}>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href={""}>صفحه اصلی</Link>
          </li>
          <li>
            <Link href={""}>اگهی ها</Link>
          </li>
        </ul>
      </div>
      {session ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href={"/signin"}>
            <FiLogIn style={{ fontSize: "20px" }} />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
