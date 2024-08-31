import React from "react";
import Tags from "./Tags";
import VideoList from "./VideoList";
import VideoShimmer from "./VideoShimmer";
import { useSelector } from "react-redux";

const VideoIndex = () => {
  const videoLoader = useSelector((state) => state.menu.videoLoader);

  return (
    <div className="block my-1 bg-black">
      <Tags />
      {videoLoader ? <VideoShimmer /> : <VideoList />}
    </div>
  );
};

export default VideoIndex;
