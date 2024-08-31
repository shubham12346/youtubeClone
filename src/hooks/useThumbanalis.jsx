import { useEffect } from "react";
import { YOUTUBE_URL } from "../component/constant";
import { useDispatch, useSelector } from "react-redux";

const useThumbanalis = () => {
  const latestVideos = useSelector((state) => state.menu.latestVideos);

  const dispatch = useDispatch();

  useEffect(() => {
    if (latestVideos?.length === 0) {
      fetchCars();
    }
  }, []);

  const fetchCars = async () => {
    const res = await fetch(YOUTUBE_URL);
    const data = await res.json();
    dispatch({ type: "menu/addLatestVideos", payload: data?.items });
    dispatch({ type: "menu/toggleLoading", payload: false });
  };
};

export default useThumbanalis;
