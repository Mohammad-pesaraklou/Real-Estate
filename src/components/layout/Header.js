import Link from "next/link";
// styles
import styles from "@/layout/Header.module.scss";

// icons
import { FiLogIn } from "react-icons/fi";
function Header() {
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

      <div className={styles.login}>
        <Link href={"/signin"}>
          <FiLogIn style={{ fontSize: "20px" }} />
          <span>ورود</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
