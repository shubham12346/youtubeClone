import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { useNavigate } from "react-router-dom";

const VideoList = () => {
  const latestVideos = useSelector((state) => state.menu.latestVideos);
  const navigate = useNavigate();

  if (latestVideos?.length === 0) {
    return;
  }

  const handleNavigate = (id) => {
    navigate(`video/${id}`);
  };

  return (
    <div className="flex flex-wrap h-[75vh] pl-5 overflow-y-scroll  mt-10 mx-10  scrollbar-thumb-sky-700 scrollbar-track-sky-300 scrollbar-thin">
      {latestVideos?.map((item, index) => (
        <VideoCard
          channelTitle={item?.snippet?.channelTitle}
          thumbnailImmage={item?.snippet?.thumbnails?.medium?.url}
          videoTitle={item?.snippet?.title}
          key={`${index}-${item?.videoId ?? item?.id}`}
          id={item?.videoId ?? item?.id}
          handleNavigate={handleNavigate}
        />
      ))}
    </div>
  );
};

export default VideoList;
