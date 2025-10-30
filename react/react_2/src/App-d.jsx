// State managemant using Redux library
// the problem with the Context api is that it rerenders all the components which is not a good thing


import { useSelector, useDispatch} from "react-redux"
import { increment , decrement } from './counterSlice'

function App_d() {
    
    return (<>
        <Count/>
        <Layer_a />
    </>)
}

function Count() {
    const  count  = useSelector((state) => state.counter.count);
    return (<>
        <div>Count is : {count}</div>
    </>)
}


function Layer_a() {

    return (<>
        <div style={{ border: "5px solid blue", boxShadow: "0px 0px 20px gray", margin: "20px", borderRadius: "20px", padding: "20px" }}>
            layer 1
            <Layer_b />
        </div>
    </>)
}

function Layer_b() {

    return (<>
        <div style={{ border: "5px solid green", boxShadow: "0px 0px 20px gray", margin: "20px", borderRadius: "20px", padding: "20px" }}>
            layer 2
            <Layer_c />
        </div>
    </>)
}


function Layer_c() {

    return (<>
        <div style={{ border: "5px solid yellow", boxShadow: "0px 0px 20px gray", margin: "20px", borderRadius: "20px", padding: "20px" }}>
            layer 3
            <Layer_d />
        </div>
    </>)
}


function Layer_d() {

    return (<>
        <div style={{ border: "5px solid pink", boxShadow: "0px 0px 20px gray", margin: "20px", borderRadius: "20px", padding: "20px" }}>
            layer 4
            <Button />
        </div>
    </>)
}


function Button() {
    const dispatch = useDispatch()
    return (<>
        <button onClick={()=>dispatch(decrement())}>decrease</button>
        <button onClick={()=>dispatch(increment())}>increase</button>
    </>)
}

export default App_d