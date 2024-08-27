import React, { useState } from "react";
import YoutubeLogo from "../youtubeLogo.png";
import HamBurger from "../hamWhite.png";
import User from "../user.png";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <div className="flex bg-black py-4 justify-between items-center relative">
      <div className="flex items-center ">
        <div
          className="px-4"
          onClick={() => {
            dispatch({ type: "menu/toggleSideBarMenu", payoad: "" });
          }}
        >
          <img
            src={HamBurger}
            className="h-10 hover:cursor-pointer"
            alt="hamburger"
          />
        </div>
        <div className="flex items-center px-1">
          <img src={YoutubeLogo} className="h-6  " alt="youtube logo " />
        </div>
        <div className="hidden md:block text-white text-3xl font-semibold">
          YouTube
        </div>
      </div>
      <form onSubmit={handleOnChange} className="flex cursor-pointer  ">
        <input
          type="text"
          value={text}
          className="px-4  rounded-l-full bg-black text-white border-slate-500  border w-5/6  lg:w-[30rem]  focus:border-blue-700 "
          onChange={handleOnChange}
        />
        <div className=" border border-slate-500 py-2 px-5 rounded-r-full">
          🔍
        </div>
      </form>
      <div className=" px-2 md:px-20">
        <img src={User} className="h-10 " alt="user" />
      </div>
    </div>
  );
};

export default Header;
