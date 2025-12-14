import Link from "next/link";


export default function NotFound() {
    return (
        <div>
            <div>
                <h1>404 NOT FOUND</h1>
            </div>
            <Link href="/">Go to main page</Link>
        </div>
    )
}