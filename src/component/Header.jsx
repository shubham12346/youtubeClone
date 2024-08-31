import React, { useState } from "react";
import YoutubeLogo from "../youtubeLogo.png";
import HamBurger from "../hamWhite.png";
import User from "../user.png";
import { useDispatch } from "react-redux";
import SearchSuggestionModal from "../modal/SearchSuggestionModal";
import useSearchApi from "../hooks/useSearchApi";
import { useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [text, setText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    let searchedText = e.target.value;
    setText(searchedText);
    if (searchedText) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  const { handleSuggestion } = useSearchApi(text);

  const handleNavigate = (id) => {
    navigate(`video/${id}`);
    setModalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "menu/videoLoader", payload: true });
    handleSuggestion(text);
    setText("");
    setModalOpen(false);
    if (id) {
      navigate("");
    }
  };

  return (
    <>
      <div className="flex bg-black py-4 justify-between items-center relative shadow-lg">
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
          <div
            className="flex items-center px-1 cursor-pointer"
            onClick={() => {
              navigate("");
            }}
          >
            <img src={YoutubeLogo} className="h-6  " alt="youtube logo " />
          </div>
          <div className="hidden md:block text-white text-3xl cursor-pointer ">
            YouTube
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex cursor-pointer relative  "
        >
          <input
            type="text"
            value={text}
            className="px-4  rounded-l-full bg-black text-white border-slate-500  border w-5/6  lg:w-[35rem]  focus:border-blue-700 "
            onChange={handleOnChange}
          />
          <div
            className=" border border-slate-500 py-2 px-5 rounded-r-full lg:px-10 hover:bg-slate-800"
            onClick={handleSubmit}
          >
            🔍
          </div>
        </form>
        <div>
          <SearchSuggestionModal
            open={modalOpen}
            handleNavigate={handleNavigate}
          />
        </div>
        <div className=" px-2 md:px-20">
          <img src={User} className="h-10 " alt="user" />
        </div>
      </div>
    </>
  );
};

export default Header;
