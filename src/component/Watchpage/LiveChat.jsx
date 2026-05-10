import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../ReduxStore/chatSlice";
import { generateName, generateRandomMessage } from "./helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);
  const [liveMessage,setLiveMessage]=useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      // Api Polling

      dispatch(
        addMessage({
          name: generateName(),
          message: generateRandomMessage() + " 🚀",
        })
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" m-6 ">
      <h1 className="p-2 text-2xl font-serif ">Live Chat </h1>

      <div className="w-full max-w-[550px] h-[600px] overflow-y-scroll border bg-slate-200 flex flex-col-reverse rounded-t-xl">
        {chatMessage.map((c,i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form className="border w-full md:w-[550px] p-1 " onSubmit={(e)=>{e.preventDefault();
      dispatch(addMessage({
        name:"Bimal_babu",
        message:liveMessage,
      }));
      setLiveMessage("")
      }
      }>
        <input className="w-96 ml-4 border border-gray-300 h-10 p-4 text-base focus:border-blue-700 focus:outline-none bg-gray-100 rounded-2xl" type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
        <button className="ml-4 bg-green-400 p-2 rounded-2xl"  
        > Send </button>
      </form>
    </div>
  );
};

export default LiveChat;
