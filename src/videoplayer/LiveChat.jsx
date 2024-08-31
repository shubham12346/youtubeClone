import React, { useEffect, useState } from "react";
import User from "../user.png";
import { useDispatch, useSelector } from "react-redux";
const LiveChat = () => {
  const [chatText, setChatText] = useState("");
  const randomComments = useSelector((state) => state.menu.randomComments);
  const dispatch = useDispatch();

  const handleTextChange = (e) => {
    setChatText(e.target.value);
  };

  function makeRandomString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  const handleSendMessage = () => {
    dispatch({ type: "menu/addRandomComments", payload: chatText });
    setChatText("");
  };

  useEffect(() => {
    let interval = setInterval(() => {
      const result = makeRandomString(20);
      dispatch({ type: "menu/addRandomComments", payload: result });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-[400px] h-[450px] bg-slate-600 rounded-lg p-1 flex flex-col justify-between px-5 ">
      <div className="text-white h-[370px] overflow-y-scroll flex-col-reverse  scrollbar-thumb-sky-700 scrollbar-track-sky-300 scrollbar-thin">
        {randomComments?.map((comment) => (
          <div className="flex my-1" key={comment}>
            <div>
              <img src={User} className="h-7 " alt="user" />
            </div>
            <div className="px-2"> {comment}</div>
          </div>
        ))}
      </div>
      <div className="py-2 px-2 flex">
        <input
          type="text"
          name=""
          value={chatText}
          onChange={handleTextChange}
          id=""
          className="w-full rounded-md py-2 px-4 bg-slate-800 text-white border border-blue-950"
        />
        <div
          onClick={handleSendMessage}
          className="bg-red-600 px-5 mx-2 text-center flex items-center cursor-pointer hover:bg-red-950 rounded text-white"
        >
          Send
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
