import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Landing } from "../Components/Landing"
import { Dashboard } from "../Components/Dashboard"

function App() {
    console.log(window.location)
    return (
        <>
            <div style={{backgroundColor:"lavender"}}>
                <div style={{ border: "2px solid red", margin: "10px 10px 30px 10px", padding: "5px" , boxShadow:"0px 0px 20px black" }}>
                    This is the information which is constant in all the pages
                    <button onClick={()=>{
                        window.location.href="/"
                    }}>Landing page</button>
                    <button onClick={()=>{
                        // window.location.href="/dashboard" this will do a hard reload and we dont want that to happen this is why we use 
                    }}>Dashboard page</button>
                </div>
                <div>

                    <BrowserRouter>
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/" element={<Landing />} />
                        </Routes>
                    </BrowserRouter>

                </div>
            </div>
        </>
    )
}

export default App
