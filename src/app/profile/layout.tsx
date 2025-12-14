'use client'

import {useEffect} from "react";


export default function NestedLayout({children} : {children: React.ReactNode}) {
    useEffect(() => {
        alert('LAYOUT')
    }, []);
    return (
        <section>
            <div> Layout second level</div>
            <div>{children}</div>
        </section>
    )
}