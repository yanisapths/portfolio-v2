import React from "react";
import Link from "next/link";
import styles from "../../styles/common.module.css";

function ScrollingMouse({ link, handleScroll }) {
  return (
    <div className="text-center">
      <Link href={link} onClick={handleScroll}>
        <div className={styles.scrolldown}>
          <div className={styles.chevrons}>
            <div className={styles.chevrondown}></div>
            <div className={styles.chevrondown}></div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ScrollingMouse;
