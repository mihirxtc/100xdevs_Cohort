// state, component
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA from 9-11",
    completed: true
  }, {
    title: "Go for walk",
    description: "Go for walk after dinner",
    completed: true
  }]);

function addTodo() {
  setTodos([...todos, {
    title: "new todo",
    description: "desc of new todo"
  }])
} 

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description} />
        <Todo title={todos[1].title} description={todos[1].description} /> */}
        {
          todos.map((todo) => {
            return <Todo title={todo.title} description={todo.description}/>
          })
        }
    </div>
  )
}

// todo app, {}[]
function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App