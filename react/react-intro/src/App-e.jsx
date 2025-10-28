import { useMemo, useState } from "react"

function App_e() {

    const [count, setCount] = useState(0)
    const [inputValue , setInputValue]= useState(1)
    const answer = useMemo(()=>{
        let ans = 0
        for (let i = 0; i <= inputValue; i++) {
            ans = ans + i
        }
        console.log(ans)
        return ans
    },[inputValue])

// the flaw in the previous approch(without useMemo) is that whenever we click on the counter button the app get re render and the sum function will work again to calculate the sum of the same input
// By using useMemo whenever the input variable changes then only the calculation happen 
    return <>
        <div>
            <input type="number" onChange={(e) => {
                const value = e.target.value
                setInputValue(parseInt(value))
            }} />
            <div>Sum upto {inputValue} is {answer}</div> 
            <button onClick={()=>{setCount(count + 1)}}>Count is {count}</button> 
            
        </div>
    </>

}

export default App_e