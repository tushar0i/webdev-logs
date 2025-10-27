import { useEffect, useState } from "react"


function App_d() {
    const [selectedId , setSelectedId] = useState(1)
    return <>
    <button onClick={()=>{setSelectedId(1)}}>1</button>
    <button onClick={()=>{setSelectedId(2)}}>2</button>
    <button onClick={()=>{setSelectedId(3)}}>3</button>
    <button onClick={()=>{setSelectedId(4)}}>4</button>
        <Renderbyid id={selectedId} />
    </>
}

function Renderbyid({id}){
    const[todos, setTodos] = useState([])

    async function fetchData() {
        const response = await fetch(`http://localhost:41414/?id=${id}`)
        const data = await response.json()
        setTodos(data)
    }
    useEffect(()=>{
        fetchData()
    },[id])

    return<>
    <div>
        <h2>{todos.title}</h2>
        <h3>{todos.description}</h3>
    </div>
    </>

}


export default App_d