"use client"

import styles from "./header.module.css"
import Link from "next/link";

export const Header = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><Link href="/hello" className={styles.link}>Main</Link></li>
                <li><Link href="/profile" className={styles.link}> Profile</Link></li>
                <li><Link href="/profile/123" className={styles.link}>Profile 123 </Link></li>
            </ul>
        </nav>
    )
}