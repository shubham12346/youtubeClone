import React from "react";

const VideoCard = ({ thumbnailImmage, videoTitle, channelTitle, id }) => {
  return (
    <div>
      <div className="py-2 px-5 m-2 w-[25rem]  cursor-pointer">
        <img src={thumbnailImmage} alt="thumbanail" />
        <div className="text-white text-2xl font-semibold  w-full overflow-hidden whitespace-nowrap text-ellipsis ">
          {videoTitle}
        </div>
        <div className="text-white">{channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoCard;
