import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import VideoIndex from "./VideoIndex";
import useThumbanalis from "../hooks/useThumbanalis";

const Base = () => {
  const sidebarMenu = useSelector((state) => state.menu.sidebarMenu);

  useThumbanalis();

  return (
    <div className="bg-black w-screen h-screen">
      <Header />
      <div className="flex">
        <div>{sidebarMenu && <Sidebar />}</div>
        <div>
          <VideoIndex />
        </div>
      </div>
    </div>
  );
};

export default Base;
