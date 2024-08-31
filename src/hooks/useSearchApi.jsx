import { useSelector, useDispatch } from "react-redux";
import { youtubeEndUrl, youtubeSearchStart } from "../component/constant";
import { useEffect } from "react";
import { toast } from "react-toastify";

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
      const searchSuggestion = await getAllTheSearchedValues(query);
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

  const getAllTheSearchedValues = async (query) => {
    try {
      const response = await fetch(
        `${youtubeSearchStart}${query}${youtubeEndUrl}`
      );
      const data = await response.json();
      const searchSuggestion = data?.items.map((item) => {
        return {
          title: item?.snippet?.title,
          channelTitle: item?.snippet?.channelTitle,
          thumbnail: item?.snippet?.thumbnails?.medium?.url,
          videoId: item?.id?.videoId,
          description: item?.snippet?.description,
          ...item,
        };
      });
      toast("Successfully Videos fetched from YouTube", {
        className: "text-white",
      });
      return searchSuggestion;
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const handleSuggestion = async (query) => {
    const searchSuggestion = await getAllTheSearchedValues(query);
    dispatch({ type: "menu/addLatestVideos", payload: searchSuggestion });
    setTimeout(() => {
      dispatch({ type: "menu/videoLoader", payload: false });
    }, [1000]);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      handleSearch(query);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  return {
    handleSuggestion,
  };
};

export default useSearchApi;
