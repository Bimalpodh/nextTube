import React from "react";

const commentsData = [
  {
    id: "1",
    name: "Bimal",
    text: "what are youding",
    replies: [
      {
        id: "1.1",
        name: "ajay",
        text: "what are youding",
        replies: [
          {
            id: "1.1.1",
            name: "tajay",
            text: "what are youding",
            replies: [
              {
                id: "1.1.1.1",
                name: "kalia",
                text: "what are youding",
                replies: [],
              },
            ],
          },
          {
            id: "1.1.2",
            name: "kajay",
            text: "what are youding",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "timal",
    text: "what are youding",
    replies: [
      {
        id: "2.1",
        name: "najay",
        text: "what are youding",
        replies: [
          {
            id: "2.1.1",
            name: "jimal",
            text: "what are youding",
            replies: [
              {
                id: "2.1.1.1",
                name: "kajay",
                text: "what are youding",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "jimal",
    text: "what are youding",
    replies: [
      {
        id: "3.1",
        name: "kajay",
        text: "what are youding",
        replies: [],
      },
      {
        id: "3.2",
        name: "jay",
        text: "what are youding",
        replies: [],
      },
    ],
  },
];


const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex bg-gray-100 p-4 rounded-2xl w-[90%]  my-2">
      <img
        src="https://www.iconpacks.net/icons/2/free-icon-user-3296.png"
        alt="user"
        className=" h-12  w-12"
      />
      <div className="px-3 ">
        <p className="font-bold text-orange-600">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment?.id} >
      <Comment data={comment} />
      <div className="pl-5 border-l ml-5" key={comment?.replies?.id}>
        <CommentList  comments={comment?.replies} />

      </div>
    </div>
  ));
};

// main component
const CommentContainers = () => {
  return (
    <div className="py-4 mb-30">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <div className="flex">
        <input className="m-2 p-5 rounded-2xl border-1 w-[500px] h-10 " type="text "  />
        <button>enter</button>
      </div>
      <CommentList comments={commentsData} />

    </div>
  );
};

export default CommentContainers;
