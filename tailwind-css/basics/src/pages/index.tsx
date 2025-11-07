// flex and grid 

export default function Home() {
  return (
    <>
    <div className="flex justify-between">
        <div className="bg-red-900">one</div>
        <div className="bg-green-900">two</div>
        <div className="bg-blue-900">three</div>
        <div className="bg-yellow-900">four</div>
    </div>
    <br />
    {/* in grid div takes the whole column */}
    <div className="grid grid-cols-4"> 
        <div className="bg-red-900">one</div>
        <div className="bg-green-900">two</div>
        <div className="bg-blue-900">three</div>
        <div className="bg-yellow-900">four</div>
        <div className="bg-blue-900">three</div>
        <div className="bg-yellow-900">four</div>
    </div>
    <br />
    <div className="grid grid-cols-14"> 
        <div className="bg-red-900 col-span-4">one</div>
        <div className="bg-green-900 col-span-6">two</div>
        <div className="bg-blue-900 col-span-1">three</div>
        <div className="bg-yellow-900 col-span-3">four</div>
    </div>
    <br />
    <div className="flex"> 
        <div className="bg-red-900 w-[10%]">one</div>
        <div className="bg-green-900 w-[29%]">two</div>
        <div className="bg-blue-900 w-[44%]">three</div>
        <div className="bg-yellow-900 w-[4%]">four</div>
    </div>
    </>
  );
}
