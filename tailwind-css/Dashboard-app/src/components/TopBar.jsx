import SearchBox from "./SearchBox";

const TopBar = () => {
    return (<>
        <div className="flex justify-between items-center gap-4 px-8 py-3 bg-white shadow-lg/5 rounded-b-lg mb-2">
            <div className="flex items-center sm:grow">
                <div className="text-2xl font-medium my-auto">
                    Payout
                </div>
                <div className=" flex pl-3  text-zinc-600 w-7.5  ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-question-circle size-4" viewBox="0 0 16 16" >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                    </svg>
                </div>
                <div className="pl-1 text-sm  text-zinc-600 hidden sm:block ">
                    How it work's
                </div>
            </div>

            <div className=" sm:grow">
                <SearchBox></SearchBox>
            </div>
            <div className="sm:grow">
                <div className="flex gap-3 justify-end ">
                    <div className="bg-gray-200 rounded-full h-10 w-10 p-2  fill-zinc-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M64 416L64 192C64 139 107 96 160 96L480 96C533 96 576 139 576 192L576 416C576 469 533 512 480 512L360 512C354.8 512 349.8 513.7 345.6 516.8L230.4 603.2C226.2 606.3 221.2 608 216 608C202.7 608 192 597.3 192 584L192 512L160 512C107 512 64 469 64 416z" /></svg>
                    </div>
                    <div className="bg-gray-200 rounded-full h-10 w-10 p-1 fill-zinc-600 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M300.3 440.8C312.9 451 331.4 450.3 343.1 438.6L471.1 310.6C480.3 301.4 483 287.7 478 275.7C473 263.7 461.4 256 448.5 256L192.5 256C179.6 256 167.9 263.8 162.9 275.8C157.9 287.8 160.7 301.5 169.9 310.6L297.9 438.6L300.3 440.8z" /></svg>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default TopBar;