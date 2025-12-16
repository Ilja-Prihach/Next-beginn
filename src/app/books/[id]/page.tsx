

type Props = {
    params: Promise<{id: string}>
    searchParams: Promise<{[key: string]: string}>
}

export default async function Home(props: Props ) {
    const params = await props.params;
    const searchParams = await props.searchParams;

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
        const todolist = await data.json()

    return (
        <div>
            Books
            <div>{params.id}</div>
            <div>searchParams: {searchParams.title}</div>
            <div>{todolist?.title}</div>
        </div>
    )
}