import React from "react";
import YoutubeEmbedded from "./YoutubeEmbedded";
import LiveChat from "./LiveChat";
import Comments from "./Comments";

const VideoPlay = () => {
  return (
    <div className="bg-black ">
      <div className="py-2 px-4 flex ">
        <YoutubeEmbedded />
        <LiveChat />
      </div>
      <div className="w-2/4 pt-24">
        <Comments />
      </div>
    </div>
  );
};

export default VideoPlay;
