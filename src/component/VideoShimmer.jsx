import React from "react";

const VideoShimmer = () => {
  return (
    <div>
      <div>
        <div className="py-2 px-5 m-2 w-[25rem]  cursor-pointer animate-pulse">
          <div>
            <div className="bg-gray-700 h-52 w-full rounded-lg"></div>
            <div className="bg-gray-700 h-8 w-3/4 mt-4 rounded"></div>
            <div className="bg-gray-700 h-6 w-1/2 mt-2 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoCardList = () => {
  return (
    <div className="flex flex-wrap h-[75vh]  overflow-y-scroll  mt-10 mx-10  scrollbar-thumb-sky-700 scrollbar-track-sky-300 scrollbar-thin">
      {Array.from({ length: 25 }).map((_, index) => (
        <VideoShimmer key={`${index}-${"t"}`} />
      ))}
    </div>
  );
};
export default VideoCardList;
