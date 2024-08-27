import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const VideoList = () => {
  const latestVideos = useSelector((state) => state.menu.latestVideos);

  if (latestVideos?.length === 0) {
    return;
  }

  return (
    <div className="flex flex-wrap h-[75vh]  overflow-y-scroll  mt-10 mx-10 scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 scrollbar-thin">
      {latestVideos?.map((item) => (
        <VideoCard
          channelTitle={item?.snippet?.channelTitle}
          thumbnailImmage={item?.snippet?.thumbnails?.medium?.url}
          videoTitle={item?.snippet?.title}
          key={item?.id}
          id={item?.id}
        />
      ))}
    </div>
  );
};

export default VideoList;
