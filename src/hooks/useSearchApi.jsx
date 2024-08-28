import { useSelector, useDispatch } from "react-redux";
import { youtubeEndUrl, youtubeSearchStart } from "../component/constant";
import { useEffect, useState } from "react";

const useSearchApi = (query) => {
  const suggestions = useSelector((state) => state.menu.suggestions);

  const dispatch = useDispatch();

  const handleSearch = async (query) => {
    if (suggestions[query]) {
      dispatch({
        type: "menu/showCurrentSuggestion",
        payload: suggestions[query],
      });
    } else {
      const response = await fetch(
        `${youtubeSearchStart}${query}${youtubeEndUrl}`
      );
      const data = await response.json();
      const searchSuggestion = data?.items.map((item) => {
        return {
          id: item?.id?.videoId,
          title: item?.snippet?.title,
          channelTitle: item?.snippet?.channelTitle,
          thumbnail: item?.snippet?.thumbnails?.medium?.url,
          videoId: item?.id?.videoId,
          description: item?.snippet?.description,
        };
      });
      console.log("data", data);

      dispatch({
        type: "menu/addSuggestions",
        payload: { [query]: searchSuggestion },
      });
      dispatch({
        type: "menu/showCurrentSuggestion",
        payload: searchSuggestion,
      });
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      handleSearch(query);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);
};

export default useSearchApi;
