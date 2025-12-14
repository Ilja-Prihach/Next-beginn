'use client'

import {useParams} from "next/navigation";

export default function Home() {

   const params = useParams()

    return (
        <div >
            <main>
                Profile {params.slug}
            </main>
        </div>
    )
}