import { useState } from 'react'
import React from 'react'
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
    // as a solution to this we will push the state down 

    // another thing that we can use is react memo which stops the things to re-render that are not changing 
    // in this case the app will re render but the things that are not changing inside will not re-render 


   
    return (
        // this thing can only return a top level xml
        // reason - makes it easy to do reconciliation
        // this is why we have included <> and </>
        <>
            <button onClick={() => setFirstTitle("This is me a random number "+Math.random())}> Click me to change the random number</button>
            <Header title={firstTitle}></Header>
           
            <Header title='This is me Tushar.' ></Header>
            <Header title='Just learning react on Diwali far from home in a hostal.'></Header>
            <Header title='Just learning react on Diwali far from home in a hostal.'></Header>
            <Header title='Just learning react on Diwali far from home in a hostal.'></Header>
            <Header title='Just learning react on Diwali far from home in a hostal.'></Header>
            <Header title='Just learning react on Diwali far from home in a hostal.'></Header>
            <Header title='Just learning react on Diwali far from home in a hostal.'></Header>
            <Header title='Just learning react on Diwali far from home in a hostal.'></Header>
        </>
    )
}

function HeaderWithButton() {
    const [firstTitle, setFirstTitle] = useState("This is me a random number " + Math.random())

    function changeTitle() {
        setFirstTitle("This is me a random number " + Math.random())
    }
    return <>
        <button onClick={changeTitle}> Click me to change the random number</button>
        <Header title={firstTitle}></Header>
    </>
}

const Header = React.memo( function Header({ title }) {
    return <div>
        {title}
    </div>
})
export default App
