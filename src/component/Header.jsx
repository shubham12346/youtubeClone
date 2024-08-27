import React, { useState } from "react";
import YoutubeLogo from "../youtubeLogo.png";
import HamBurger from "../hamWhite.png";
import User from "../user.png";
const Header = () => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  return (
    <div className="flex bg-black py-4 justify-between items-center ">
      <div className="flex items-center ">
        <div className="px-4">
          <img src={HamBurger} className="h-10 " alt="hamburger" />
        </div>
        <div className="flex items-center px-1">
          <img src={YoutubeLogo} className="h-6  " alt="youtube logo " />
        </div>
        <div className="text-white text-3xl font-semibold"> YouTube</div>
      </div>
      <form onSubmit={handleOnChange} className="flex cursor-pointer  ">
        <input
          type="text"
          value={text}
          className="px-2  rounded-l-lg bg-black text-white border-slate-500  border w-[30rem]  focus:border-blue-700 "
          onChange={handleOnChange}
        />
        <div className=" border border-slate-500 py-2 px-5"> 🔍 </div>
      </form>
      <div className="px-20">
        <img src={User} className="h-10 " alt="user" />
      </div>
    </div>
  );
};

export default Header;
