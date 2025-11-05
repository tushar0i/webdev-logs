import { VideoCard } from "./VideoCard"

// iterating over an array in a component
const VIDEOS = [{ // this will come from our back end just to learn things now we are hard coding them in the memory
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}, {
    thumbnail: "/thumbnail.jpg",
    profile: "/profile.jpg",
    title: "Demystifying LLMs: What Happens When You Chat with AI", 
    cname: "Harkirat Singh",
    views: "64K",
    timestamp: "2 months"
}]


export const VideoGrid = () => {

    return (<>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(video => <div>
                <VideoCard
                    thumbnail={video.thumbnail}
                    profile={video.profile}
                    title={video.title}
                    cname={video.cname}
                    views={video.views}
                    timestamp={video.timestamp}
                ></VideoCard>
            </div>
            )}
        </div>
    </>)
}