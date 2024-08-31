import React from "react";
import User from "../user.png";
const commentList = [
  { name: "Shubham", description: "the comment is in the line", replies: [] },
  {
    name: "Shubham",
    description: "the comment is in the line",
    replies: [
      {
        name: "Shubham",
        description: "the comment is in the line",
        replies: [
          {
            name: "Shubham",
            description: "the comment is in the line",
            replies: [
              {
                name: "Shubham",
                description: "the comment is in the line",
                replies: [],
              },
              {
                name: "Shubham",
                description: "the comment is in the line",
                replies: [],
              },
              {
                name: "Shubham",
                description: "the comment is in the line",
                replies: [],
              },
            ],
          },
          {
            name: "Shubham",
            description: "the comment is in the line",
            replies: [],
          },
          {
            name: "Shubham",
            description: "the comment is in the line",
            replies: [],
          },
        ],
      },
      {
        name: "Shubham",
        description: "the comment is in the line",
        replies: [],
      },
      {
        name: "Shubham",
        description: "the comment is in the line",
        replies: [],
      },
    ],
  },
  { name: "Shubham", description: "the comment is in the line", replies: [] },
  { name: "Shubham", description: "the comment is in the line", replies: [] },
];
const Comment = ({ comment }) => {
  const { name, description, replies } = comment;
  return (
    <div className="flex text-white bg-slate-700 my-2 w-[50%]">
      <div>
        <img src={User} className="h-10 " alt="user" />
      </div>
      <div className="px-2">
        <div className="font-semibold text-sm">{name}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
};
const CommentsList = ({ commentList }) => {
  return (
    <div className="text-white bg-black ">
      {commentList?.map((comment, index) => (
        <div key={index}>
          <Comment comment={comment} />
          <div className="px-4 border-l-2 border-white">
            <CommentsList commentList={comment?.replies} />{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="border-2 border-white">
      <div className="text-white py-5 text-xl">
        A n nested comments component{" "}
      </div>
      <CommentsList commentList={commentList} />
    </div>
  );
};

export default CommentContainer;
