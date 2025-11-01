// State Management through Redux
import ItemList from "./components/itemList"
import "./App.css"

function App(){

    return (<>
        <div className="mainContainer">
            <h2>🧾 My Cart</h2>
            <ItemList/>
        </div>
    </>)
}

export default App
