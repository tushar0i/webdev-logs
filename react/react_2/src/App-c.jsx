// Context API passing down the prop using context api

import { useContext, useState } from "react"
import { CountContext } from "./context"


// Wrap everyone that want to use teleported value inside a provider 

function App_c() {
    const [count, setCount] = useState(0)
    return (<>
        <CountContext.Provider value={{ count, setCount }}>
            <Count />
        </CountContext.Provider>
    </>)

}

function Count() {
    const { count } = useContext(CountContext)
    return (<>
        <div>Count is : {count}</div>
        <Layer_a />
    </>)
}


function Layer_a() {

    return (<>
        <div style={{ border: "5px solid blue", boxShadow: "0px 0px 20px gray", margin: "20px", borderRadius: "20px", padding: "20px" }}>
            layer 1
            <Layer_b />
        </div>
    </>)
}

function Layer_b() {

    return (<>
        <div style={{ border: "5px solid green", boxShadow: "0px 0px 20px gray", margin: "20px", borderRadius: "20px", padding: "20px" }}>
            layer 2
            <Layer_c />
        </div>
    </>)
}


function Layer_c() {

    return (<>
        <div style={{ border: "5px solid yellow", boxShadow: "0px 0px 20px gray", margin: "20px", borderRadius: "20px", padding: "20px" }}>
            layer 3
            <Layer_d />
        </div>
    </>)
}


function Layer_d() {

    return (<>
        <div style={{ border: "5px solid pink", boxShadow: "0px 0px 20px gray", margin: "20px", borderRadius: "20px", padding: "20px" }}>
            layer 4
            <Button />
        </div>
    </>)
}


function Button() {
    const { count, setCount } = useContext(CountContext)
    return (<>
        <button onClick={() => {
            setCount(count - 1)
        }}>decrease</button>
        <button onClick={() => {
            setCount(count + 1)
        }}>increase</button>
    </>)
}
export default App_c