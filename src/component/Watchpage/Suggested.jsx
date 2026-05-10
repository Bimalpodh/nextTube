import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWatchVideoData } from "../../ReduxStore/watchVideoDataSlice";
import { YOUTUBE_VIDEOES_API, YOUTUBE_SEARCH_RESULT_API } from "../../utils/constants";

const Suggested = ({ videoId, filter }) => {
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSuggestedVideos();
  }, [videoId, filter]);

  const fetchSuggestedVideos = async () => {
    try {
      let url = YOUTUBE_VIDEOES_API;

      if (filter && filter !== "All") {
        if (filter.startsWith("From ")) {
          const channelName = filter.replace("From ", "");
          url = YOUTUBE_SEARCH_RESULT_API + encodeURIComponent(channelName);
        } else if (filter === "Recently uploaded") {
          url = YOUTUBE_SEARCH_RESULT_API + "&order=date";
        } else {
          url = YOUTUBE_SEARCH_RESULT_API + encodeURIComponent(filter);
        }
      }

      const data = await fetch(url);
      const json = await data.json();
      
      // Handle different API response structures (popular vs search)
      const items = json?.items?.map(item => {
        if (typeof item.id === 'object') {
          return { ...item, id: item.id.videoId };
        }
        return item;
      }) || [];

      const filteredVideos = items.filter((video) => video.id !== videoId);
      setSuggestedVideos(filteredVideos);
    } catch (error) {
      console.error("Error fetching suggested videos:", error);
    }
  };

  if (suggestedVideos.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 p-2">
      <h2 className="text-lg font-bold mb-2">Suggested Videos</h2>
      <div className="flex flex-col gap-3">
        {suggestedVideos.map((video) => (
          <Link
            key={video?.id}
            to={"/watch?v=" + video?.id}
            onClick={() => dispatch(setWatchVideoData(video))}
            className="flex gap-2 hover:bg-gray-100 p-1 rounded-lg transition-colors group"
          >
            {/* Thumbnail */}
            <div className="relative min-w-[160px] h-[90px]">
              <img
                src={video?.snippet?.thumbnails?.medium?.url}
                alt={video?.snippet?.title}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>

            {/* Video Info */}
            <div className="flex flex-col overflow-hidden">
              <h3 className="text-sm font-semibold line-clamp-2 leading-tight group-hover:text-blue-600">
                {video?.snippet?.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                {video?.snippet?.channelTitle}
              </p>
              <p className="text-xs text-gray-500">
                {parseInt(video?.statistics?.viewCount).toLocaleString()} views
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Suggested;
