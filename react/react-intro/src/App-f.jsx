import { memo, useCallback, useState } from "react"

function App_f() {
    const [counter, setCounter] = useState(0)

    const a = useCallback(() => {
        console.log("running the function")
    }, [])
    // useCallback is used to memoize a function 

    return <>
        <div>
            <button onClick={() => setCounter(counter + 1)}>Count is {counter}</button>
            <Demo a={a}></Demo>
        </div>
    </>
}

const Demo = memo(({ a }) => {
    console.log("rendering")
    return <>
        <div>
            Hi there I am Tushar just testing things out in React 
        </div>
    </>
})

export default App_f