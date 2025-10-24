// function that starts with use are called hooks in React 
// useEffect in React 
import { useEffect ,useState } from "react"

function App_c() {
    const [todos, setTodos] = useState([])

    async function fetchData(){
        const response = await fetch("http://localhost:3000/todos")
        const data = await response.json()
        setTodos(data.todos)
    }
    useEffect(() => {
        setInterval(()=>{
            fetchData()
        },4000)
    }, [])

    return <>

        {
            todos.map((todo)=>{
                return <div>
                    <h2>{todo.title}</h2>
                    <h3>{todo.description}</h3>
                </div>
            })
        }

    </>
}

export default App_c