import { useEffect } from "react";
import { YOUTUBE_URL } from "../component/constant";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const useThumbanalis = () => {
  const latestVideos = useSelector((state) => state.menu.latestVideos);

  const dispatch = useDispatch();

  useEffect(() => {
    if (latestVideos?.length === 0) {
      fetchCars();
    }
  }, []);

  const fetchCars = async () => {
    try {
      const res = await fetch(YOUTUBE_URL);
      const data = await res.json();
      dispatch({ type: "menu/addLatestVideos", payload: data?.items });
    } catch (err) {
      console.log(err?.message);
      toast.error(err.message);
    } finally {
      dispatch({ type: "menu/toggleLoading", payload: false });
    }
  };
};

export default useThumbanalis;
