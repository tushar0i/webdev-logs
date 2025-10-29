// Client Side Routing
import React from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom" // we will do routing with next.js in future
const Landing = React.lazy(()=> import("../Components/Landing"))
const Dashboard = React.lazy(()=>import("../Components/Dashboard"))
function App() {
    return (
        <>
            <div style={{ backgroundColor: "lavender" }}>
                    <BrowserRouter>
                    <Appbar/>
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/" element={<Landing />} />
                        </Routes>
                    </BrowserRouter>
            </div>
        </>
    )
}


function Appbar() {
    const navigate = useNavigate()
    console.log(window.location)
    return (
        <>
            <div style={{ border: "2px solid red", margin: "10px 10px 30px 10px", padding: "5px", boxShadow: "0px 0px 20px black" }}>
                This is the information which is constant in all the pages
                <button onClick={() => {
                    navigate("/")
                }}>Landing page</button>
                <button onClick={() => {
                    navigate("/dashboard")
                    // window.location.href="/dashboard" this will do a hard reload and we dont want that to happen this is why we use 
                }}>Dashboard page</button>
            </div>
        </>
    )
}
export default App
