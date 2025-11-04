export function VideoCard(prop: any) {
    return (
        <>
            <div>
                <img src="/image.png" className="rounded-xl" />
                <div className="grid grid-cols-10 pt-3">
                    <div className="col-span-2 ">
                        <img className={"rounded-full w-20 h-20 "} src="/profile.jpg" />
                    </div>
                    <div className="col-span-8 pl-3">
                        <div>
                            How a 21-Year-Old Got an ₹80 LPA Offer (Before Degree!)
                        </div>
                        <div className="text-gray-400">
                            Harkirat Singh
                        </div>
                        <div className="text-gray-400">
                            142K views  4 months ago
                        </div>
                    </div>
                    \
                </div>
            </div>
        </>
    );
}