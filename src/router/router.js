import { createBrowserRouter } from "react-router-dom";
import VideoIndex from "../component/VideoIndex";
import VideoPlay from "../videoplayer/VideoPlay";
import Base from "../component/Base";

export const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Base />,
      children: [
        {
          path: "",
          element: <VideoIndex />,
        },
        {
          path: "/video/:id",
          element: <VideoPlay />,
        },
      ],
    },
  ],
  { basename: "/youtubeClone" }
);
