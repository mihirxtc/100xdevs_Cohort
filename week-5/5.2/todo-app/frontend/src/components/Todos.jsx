
export function Todos({todos}) {
    return <div>
        {
            todos.map((todo) => {
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
                </div>
            })
        }
    </div>
}

/*
    todos = [
        {
            title: "go the gym",
            description: "go to the gym at 8"
        }
    ]
*/