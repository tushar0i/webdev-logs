export function VideoCard(prop: any) {
    return (
        <>
            <div className="p-2 cursor-pointer">
                <img src={prop.thumbnail} className="rounded-2xl" />
                <div className="grid grid-cols-10 pt-3">
                    <div className="col-span-2 pl-2">
                        <img className={"rounded-full w-15 h-15"} src={prop.profile} />
                    </div>
                    <div className="col-span-8 pl-3">
                        <div>
                            {prop.title}
                        </div>
                        <div className="text-gray-400  ">
                            {prop.cname}
                        </div>
                        <div className="text-gray-400">
                            {prop.views} views | {prop.timestamp} ago
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}