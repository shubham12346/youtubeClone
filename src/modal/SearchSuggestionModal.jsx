import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchSuggestionModal = ({ open }) => {
  const currentSuggested = useSelector((state) => state.menu.currentSuggested);
  const navigate = useNavigate();

  if (!open) {
    return null;
  }
  const handleNavigate = (id) => {
    console.log("`video/${id}`", `video/${id}`);
    navigate(`video/${id}`);
  };
  return (
    <div className="absolute  text-white left-[33%] h-[400px] bg-slate-700 w-[30rem] p-2 rounded-md py-4 overflow-y-scroll  overflow-y-scroll  mt-10 mx-10 scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 scrollbar-thin">
      {currentSuggested?.map((suggestion) => (
        <div
          className="px-4  my-2  cursor-pointer"
          key={suggestion?.id}
          onClick={() => {
            handleNavigate(suggestion?.id);
          }}
        >
          {suggestion.title}
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestionModal;
