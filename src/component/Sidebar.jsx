import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-black text-white inline-block h-[89vh] ">
      <div className=" py-2 px-6 cursor-pointer">Home</div>
      <div className=" py-2 px-6 cursor-pointer">Shorts</div>
      <div className=" py-2 px-6 cursor-pointer ">Subscription </div>

      <div className="border-t border-white">
        <div className="py-2 px-6"> Trending </div>
        <div className="px-6">
          <div className="py-1 px-6"> Shopping </div>
          <div className="py-1 px-6"> Music </div>
          <div className="py-1 px-6"> Movies </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
