




export default async function Home() {

    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const todolist = await data.json()

    return (
        <div>
            Books
            <div>List</div>
            <div>{todolist?.title}</div>
        </div>
    )
}