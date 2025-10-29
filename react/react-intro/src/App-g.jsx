import {  useEffect, useRef, useState } from "react"

function App_g(){
    const [age, setage] = useState(10)
    const divReference = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            console.log(divReference.current)// this will give us the div that contain's age
            divReference.current.innerHTML = 19
        },1500)
    },[])
    return <>
    <div>
        My age : <div ref={divReference}>{age}</div>
    </div>
    </>

}

export default App_g