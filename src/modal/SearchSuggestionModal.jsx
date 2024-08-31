import React from "react";
import { useSelector } from "react-redux";
const SearchSuggestionModal = ({ open, handleNavigate }) => {
  const currentSuggested = useSelector((state) => state.menu.currentSuggested);

  if (!open) {
    return null;
  }
  return (
    <div className="absolute z-10  text-white left-[23%] top-[27px] h-[400px] bg-slate-700 w-[35rem] p-2 rounded-md py-4 overflow-y-scroll   mt-10 mx-10  scrollbar-thumb-sky-700 scrollbar-track-sky-300 scrollbar-thin">
      {currentSuggested?.map((suggestion, index) => (
        <div
          className="px-4  my-2  cursor-pointer"
          key={`${index} - ${suggestion?.videoId}`}
          onClick={() => {
            handleNavigate(suggestion?.videoId);
          }}
        >
          {suggestion.title}
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestionModal;
