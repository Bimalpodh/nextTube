import React, { useEffect, useState, useCallback } from "react";
import { YOUTUBE_VIDEOES_API, YOUTUBE_SEARCH_RESULT_API } from "../../../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "../../shimmer/Shimmer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWatchVideoData } from "../../../ReduxStore/watchVideoDataSlice";

const VideoContainer = ({ selectedCategory }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const getVideos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const url =
        selectedCategory === "All"
          ? YOUTUBE_VIDEOES_API
          : YOUTUBE_SEARCH_RESULT_API + encodeURIComponent(selectedCategory);
          
      const res = await fetch(url);
      if (!res.ok) throw new Error("API Limit Reached or Network Error");
      
      const data = await res.json();
      setVideos(data?.items || []);
    } catch (err) {
      console.error("Failed to fetch YouTube videos:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center p-4">
        <div className="bg-red-50 text-red-600 p-6 rounded-2xl max-w-md shadow-sm border border-red-100">
          <h3 className="text-xl font-bold mb-2">Oops! Something went wrong</h3>
          <p className="text-sm opacity-90">{error}</p>
          <button 
            onClick={getVideos}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (loading) return <Shimmer />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-2 p-5 animate-in fade-in duration-700">
      {videos.map((video, index) => {
        const videoId = typeof video.id === "object" ? video.id.videoId : video.id;
        return (
          <Link
            key={videoId || index}
            to={"/watch?v=" + videoId}
            onClick={() => dispatch(setWatchVideoData(video))}
            className="flex justify-center"
          >
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
