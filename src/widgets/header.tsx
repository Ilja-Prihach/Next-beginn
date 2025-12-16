"use client"

import styles from "./header.module.css"
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback} from "react";
import Link from "next/link";


export const Header = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const createQueryString =  useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value);
            return params.toString()
        },
        [searchParams]
    )

    return (
        <nav className={styles.navigation}>
            <button
                onClick={()=>{
                    router.push(pathname + '?' + createQueryString('title', 'book'));
                }}
            >
                ASC
            </button>
            <ul>
                <li><button  onClick={() => router.back()} className={styles.link}>Back</button></li>
                <li><button  onClick={() => router.push("/hello")} className={styles.link}>Main</button></li>
                <li><button  onClick={() => router.push("/profile", {scroll: false})} className={styles.link}> Profile</button></li>
                <li><button  onClick={() => router.push("/profile/123")} className={styles.link}>Profile 123 </button></li>
                <li><Link  href={"/books"} className={styles.link}>Books </Link></li>
                <li><button  onClick={() => router.forward()} className={styles.link}>Forward</button></li>
            </ul>
        </nav>
    )
}