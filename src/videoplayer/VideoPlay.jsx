import React from "react";
import YoutubeEmbedded from "./YoutubeEmbedded";
import LiveChat from "./LiveChat";
import Comments from "./Comments";

const VideoPlay = () => {
  return (
    <div className="py-2 px-4 flex w-full">
      <YoutubeEmbedded />
      <LiveChat />
      <Comments />
    </div>
  );
};

export default VideoPlay;
