import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import useThumbanalis from "../hooks/useThumbanalis";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Base = () => {
  const sidebarMenu = useSelector((state) => state.menu.sidebarMenu);
  useThumbanalis();

  return (
    <div className="bg-black w-full h-full">
      <Header />
      <div className="flex">
        <div>{sidebarMenu && <Sidebar />}</div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Base;
