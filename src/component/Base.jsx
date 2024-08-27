import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import useThumbanalis from "../hooks/useThumbanalis";
import { Outlet } from "react-router-dom";

const Base = () => {
  const sidebarMenu = useSelector((state) => state.menu.sidebarMenu);

  useThumbanalis();

  return (
    <div className="bg-black w-screen h-screen">
      <Header />
      <div className="flex">
        <div>{sidebarMenu && <Sidebar />}</div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Base;
