// flex and grid 

export default function Home() {
  return (
    <>
    {/* flex  */}
    <div>
        flex justify-between
    </div>
    <div className="flex justify-between">
        <div className="bg-red-900">one</div>
        <div className="bg-green-900">two</div>
        <div className="bg-blue-900">three</div>
        <div className="bg-yellow-900">four</div>
    </div>
    <br />
    <div>
        grid grid-cols-4
    </div>
    {/* in grid div takes the whole column */}
    <div className="grid grid-cols-4"> 
        <div className="bg-red-900">one</div>
        <div className="bg-green-900">two</div>
        <div className="bg-blue-900">three</div>
        <div className="bg-yellow-900">four</div>
        <div className="bg-cyan-900">five</div>
        <div className="bg-pink-900">six</div>
    </div>
    <br />
    <div>
        grid grid-cols-17
    </div>
    <div className="grid grid-cols-17"> 
        <div className="bg-red-900 col-span-6"> 4 col one</div>
        <div className="bg-green-900 col-span-3"> 3 col two</div>
        <div className="bg-blue-900 col-span-2"> 2 col three</div>
        <div className="bg-yellow-900 col-span-4"> 6 col four</div>
        <div className="bg-cyan-900">default five</div>
    </div>
    <br />
    <div>
        flex
    </div>
    <div className="flex"> 
        <div className="bg-red-900 w-[10%]">10% one</div>
        <div className="bg-green-900 w-[29%]">29% two</div>
        <div className="bg-blue-900 w-[44%]">44% three</div>
        <div className="bg-yellow-900 w-[4%]">4% four</div>
    </div>
    <br />
    {/* responsiveness | tailwind is mobile first */}
    {/* Where this approach surprises people most often is that to style something for mobile, 
    you need to use the unprefixed version of a utility, not the "sm: " prefixed version. 
    Don't think of "sm: " as meaning "on small screens", think of it as "at the small breakpoint".*/}
    <div>
        flex bg-red-900 sm:bg-blue-900 md:bg-green-900 lg:bg-yellow-900 xl:bg-cyan-900 2xl:bg-pink-900
    </div>
    <div className="flex bg-red-900 sm:bg-blue-900 md:bg-green-900 lg:bg-yellow-900 xl:bg-cyan-900 2xl:bg-pink-900" >
        {/* the above css global color red, small bp and above blue , md bp and above green , 
        lg bp and above yellow, xl bp and above cyan, 2xl bp and above pink |bp means break point which are usually 
        sm 640px
        md 768px
        lg 1024px
        xl 1280px
        2xl 1536px
        */}
        checking the responsiveness
    </div>
    <br />
    <div>
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        <div className="bg-red-900">one</div>
        <div className="bg-green-900">two</div>
        <div className="bg-blue-900">three</div>
        <div className="bg-yellow-900">four</div>
    </div>
    </>
  );
}
