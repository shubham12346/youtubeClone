import React, { useState } from "react";

const LiveChat = () => {
  const [chatText, setChatText] = useState("");

  const handleTextChange = (e) => {
    setChatText(e.target.value);
  };

  return (
    <div className=" w-[400px] h-[450px] bg-slate-600 rounded-lg p-3 flex flex-col justify-between">
      <div className="text-white"> helloo</div>
      <div className="py-2 px-2">
        <input
          type="text"
          name=""
          value={chatText}
          onChange={handleTextChange}
          id=""
          className="w-full rounded-md py-2 px-4 bg-slate-800 text-white border border-blue-950"
        />
      </div>
    </div>
  );
};

export default LiveChat;
