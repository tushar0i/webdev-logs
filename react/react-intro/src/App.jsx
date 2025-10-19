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
    const [firstTitle , setFirstTitle ] = useState("This is me a random number "+Math.random())
    // const [variabe, function] = useState(input)
    // variable = input 
    // a function to do thing with the variable


    // any time a parent re-render all its childeren re-renders 
    // when ever the setFirstTitle get called the whole App will re-render which is not a good thing  
    function changeTitle(){
        console.log("function reached change title")
        setFirstTitle("This is me a random number "+Math.random())
    }
    
    return (
        // this thing can only return a top level xml
        // reason - makes it easy to do reconciliation
        // this is why we have included <> and </>
        <>
            <button onClick={changeTitle}> Click me to change the random number</button>
            <Header title={firstTitle}></Header>
            <Header title={'This is me Tushar.'} ></Header>
            <Header title={'Just learning react a day before Diwali far from home in a hostal.'}></Header>
        </>
    )
}

function Header({title}){
    console.log("function reached Header")
    return <div>
        {title}
    </div>
}
export default App
