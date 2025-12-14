export default function NestedLayout ({children}: {children: React.ReactNode}) {
    return (
        <section>
            <div>Layout third level</div>
            <div>{children}</div>
        </section>
    )
}