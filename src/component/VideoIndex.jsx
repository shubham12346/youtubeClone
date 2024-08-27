import React from "react";
import Tags from "./Tags";
import VideoList from "./VideoList";

const VideoIndex = () => {
  return (
    <div className="block my-1 mx-1">
      <Tags />
      <VideoList />
    </div>
  );
};

export default VideoIndex;
