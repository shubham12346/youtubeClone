import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Base = () => {
  const sidebarMenu = useSelector((state) => state.menu.sidebarMenu);
  return (
    <div>
      <Header />
      {sidebarMenu ? <Sidebar /> : null}
    </div>
  );
};

export default Base;
