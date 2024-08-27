import React from "react";

const Tags = () => {
  const tags = [
    "ALL",
    "Music",
    "T-Series",
    "Mixes",
    "Web Development",
    "Software framework",
  ];
  return (
    <div className="flex">
      {tags?.map((item) => (
        <div
          className="mx-2 py-1 px-3 bg-slate-900 rounded cursor-pointer text-white shadow"
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Tags;
