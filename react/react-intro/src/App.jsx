import { useState } from 'react'
// const { useState } = require('react') do the same thing as above but we have to make some file change to use the import from thing
import './App.css'

// async function getData(link) {
//     const response = await fetch(link)
//     const data = response.json()
//     console.log(data)
//     return data.number
// } just trying something never mind

function App() {

    const [count, setCount] = useState(0)
    // const [variabe, function] = useState(input)
    // variable = input 
    // a function to do thing with the variable

    
    return (
        // this thing can only return a top level xml
        // reason - makes it easy to do reconciliation
        // this is why we have included <> and </>
        <>
            <div>
                <button onClick={() => setCount(function (count) {
                    return count + 1
                })}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default App
