export const SearchBox = () => {
    return (<>
            <div className="max-sm:hidden block w-96 flex border border-gray-500 rounded-full bg-#121212 p-1 ">
                <input type="search" className="w-full p-1 ps-7  text-white border-none outline-none " placeholder="Search" required />
                <button type="submit" className="outline-none font-bold px-4 text-gray-500 border-none inline-flex items-center ">
                    <svg className="w-5 h-5  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>
            <div className="block sm:hidden">
                <button type="submit" className="outline-none font-bold pt-2 text-gray-500 border-none inline-flex items-center ">
                    <svg className="w-6 h-6  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>
     

    </>)
}