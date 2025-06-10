import React, { useEffect } from "react";
import { SUGGESTED_VIDEO_API } from "../../utils/constants";

const Suggested = ({videoId}) => {


  useEffect(()=>{
    fetchSuggestedVideo()

  },[])

const fetchSuggestedVideo = async () => {
  const data = await fetch(SUGGESTED_VIDEO_API + videoId);
  const json = await data.json();
  console.log(json);
};



  return (
    <div className=" m-6 w-full ">
      <h2 className="text-md font-semibold w-20 mb-3 text-gray-700">
        Suggested Videos
      </h2>
      {/* Replace this block with mapped suggestions */}
      <div className="space-y-3">
        <div className="bg-gray-100 p-3 rounded">Suggested Video 1 </div>
        <div className="bg-gray-100 p-3 rounded">Suggested Video 2</div>
        <div className="bg-gray-100 p-3 rounded">Suggested Video 3</div>
        <div className="bg-gray-100 p-3 rounded">Suggested Video 4</div>
        <div className="bg-gray-100 p-3 rounded">Suggested Video 5</div>
      </div>
    </div>
  );
};

export default Suggested;
