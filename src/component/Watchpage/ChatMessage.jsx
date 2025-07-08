import React from "react";

const ChatMessage = ({name, message}) => {
  return (
    <div className="items-center">
      <div className=" flex mx-5  py-2 ">
        <img
          src="https://www.iconpacks.net/icons/2/free-icon-user-3296.png"
          alt="user"
          className=" h-12  w-12"
        />
        <span className=" py-2 px-2 text-gray-400 font-bold">{name}</span>
        <span className=" py-2  text-wrap ">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
