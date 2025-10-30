// prop drilling 

import { useState } from "react"

function App_b(){
    const [count, setCount] = useState(0)
    return(<>
        <Count count={count} setCount={setCount}/>
    </>)
}

function Count({count, setCount}){ // this component dont uses the setCount it just passes it down to the button component this make the code look ugly as our state grows 
// CONTEXT API let us solve this problem (teleport data without props)
    return(<>
    <div>Count is : {count}</div>
    <Button count={count}  setCount={setCount}/>
    </>)
}

function Button({count,setCount}){

    return(<>
        <button onClick={()=>{
            setCount(count+1)
        }}>increase</button>
        <button onClick={()=>{
            setCount(count-1)
        }}>decrease</button>
    </>)
}

export default App_b