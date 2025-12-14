'use client'

import {useParams, useSearchParams} from "next/navigation";

export default function Home() {

   const params = useParams()
    const searchParams = useSearchParams()

    return (
        <div >
            <main>
                Profile {params.slug}
                <div>{searchParams.get('title')}</div>
            </main>
        </div>
    )
}