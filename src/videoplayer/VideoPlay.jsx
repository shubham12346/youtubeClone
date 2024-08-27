import React from "react";
import YoutubeEmbedded from "./YoutubeEmbedded";
import LiveChat from "./LiveChat";

const VideoPlay = () => {
  return (
    <div className="py-2 px-4 flex w-full">
      <YoutubeEmbedded />
      <LiveChat />
    </div>
  );
};

export default VideoPlay;
