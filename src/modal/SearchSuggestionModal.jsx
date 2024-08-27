import React from "react";

const SearchSuggestionModal = ({ open }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="absolute  text-white left-[33%] h-[400px] bg-slate-700 w-[30rem] p-2 rounded-md py-4">
      <div className="px-4 my-1  cursor-pointer">iphone one </div>
      <div className="px-4 my-1 cursor-pointer">iphone one </div>
      <div className="px-4 my-1 cursor-pointer">iphone one pro </div>
      <div className="px-4 my-1 cursor-pointer">iphone one pro plus </div>
      <div className="px-4 my-1 cursor-pointer">iphone one pro </div>
      <div className="px-4 my-1 cursor-pointer">iphone one pro plus </div>
      <div className="px-4 my-1 cursor-pointer">iphone one pro </div>
      <div className="px-4 my-1 cursor-pointer">iphone one pro plus </div>
    </div>
  );
};

export default SearchSuggestionModal;
