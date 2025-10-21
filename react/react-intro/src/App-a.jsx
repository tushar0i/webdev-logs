// keys in react 
import { useState } from 'react'
import './App.css'

let count = 4

function App_a() {

    const [todos, setTodo] = useState([{
        id: 1,
        title: "task 1",
        description: "this is the description"
    }, {
        id: 2,
        title: "task 2",
        description: "this is the description"
    }, {
        id: 3,
        title: "task 3",
        description: "this is the description"
    }])

    function Addtodo() {
        setTodo([...todos,{
            id: count++,
            title: "some task ",
            description:"some description"
        }])
    }
  
    return (
        <>
            <button onClick={Addtodo}>Add to Do</button>
            {/*key help react to calculate diff and reduce the number of re renders */}
            {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
            {/* <Todo title={'This is tushar'} description={'hi'} /> */}
        </>
    )

}


function Todo({ title, description }) {
    return <div>
        <h2>{title}</h2>
        <h3>{description}</h3>
    </div>

}

// some thing we all adore one thing we dieing for nothing but pain stuck in this game searching for fortune and gain 
export default App_a
