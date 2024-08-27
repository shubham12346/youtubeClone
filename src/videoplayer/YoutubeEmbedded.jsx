import React from "react";
import { useSelector } from "react-redux";
const YoutubeEmbedded = () => {
  const sidebarMenu = useSelector((state) => state.menu.sidebarMenu);
  return (
    <div className="px-2">
      <iframe
        className={`${sidebarMenu ? "w-[60vw]" : "w-[70vw]"} h-[450px]`}
        src="https://www.youtube.com/embed/sMk760VgGBg?si=bGRZVlMEh8uB3Tch"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbedded;
