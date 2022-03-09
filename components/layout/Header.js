import React from 'react'
import Link from "next/link"
import Image from "next/image"
import styles from '../../styles/header-main.module.scss'

function Header() {
  return (
    <header>
      <div className={styles.main}>
        <Link href="#">
            <Image src="/logo.png" width="100" height="100"/>
        </Link>

        <input type="checkbox" className={styles.menubtn} id="menu-btn"></input>
          <lable for="menu-btn" className={styles.menuicon}>
            <span className={styles.line}></span>
          </lable>
          <ul className={styles.links}>
              <li className={styles.link}>
                  <Link href="#">About</Link>
                </li>
                <li className={styles.link}>
                  <Link  href="#">Work</Link>
                </li>
                <li className={styles.link}>
                  <Link  href="#">Archive</Link>
                </li>
                <li className={styles.link}>
                  <Link  href="#">Contact</Link>
                </li>
            </ul>

      </div>
    </header>
  )
}

export default Header