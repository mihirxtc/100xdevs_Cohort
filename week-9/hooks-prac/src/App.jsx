import axios from "axios";
import { useEffect, useState } from "react";

function useTodos(n) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([])

  useEffect(() => {

    setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
    })
    }, n * 1000)

    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
    })

    return () => {
      clearInterval(n);
    }

  }, [n])

  return {
    todos,
    loading
  }
}

function App() {
  const {todos, loading}  = useTodos(5);

  if (loading) {
    return <div>
      Loading...
    </div>
  }
  
  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )

}

function Track({todo}) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App;