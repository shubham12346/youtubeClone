import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const YoutubeEmbedded = () => {
  const { id } = useParams();
  const sidebarMenu = useSelector((state) => state.menu.sidebarMenu);
  return (
    <div className="px-2 ">
      <iframe
        className={`${
          sidebarMenu ? "w-[55vw] px-5 " : "w-[65vw] px-20 "
        } h-[450px] `}
        src={`https://www.youtube.com/embed/${id}?si=bGRZVlMEh8uB3Tch`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbedded;
