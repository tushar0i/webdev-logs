import { Signin } from "./Signin"
import { SearchBox } from "./SearchBox"

export const AppBar = () =>{

    return (<>
    <div className="flex justify-between p-2">
        <div >
            <img src="/YouTubelight.svg" className="w-31 flex inline-flex items-center pt-2" alt="" />
        </div>
        <div>
            <SearchBox></SearchBox>
        </div>
        <div>
            <Signin></Signin>
        </div>
    </div> 
    </>)
}
