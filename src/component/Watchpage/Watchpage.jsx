import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../ReduxStore/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API } from "../../utils/constants";
import { setWatchVideoData } from "../../ReduxStore/watchVideoDataSlice";
import Suggested from "./Suggested";
import LiveChat from "./LiveChat";
import CommentsContainer from "./CommentsContainer";
import WatchButtonList from "./WatchButtonList";

const Watchpage = () => {
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  const videoData = useSelector((store) => store?.watchVideoData?.videoInfo);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const [showFull, setShowFull] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    if (videoId && (!videoData || videoData.id !== videoId)) {
      fetch(VIDEO_API + `id=${videoId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.items?.length > 0) {
            dispatch(setWatchVideoData(data.items[0]));
          }
        })
        .catch((err) => console.error("Failed to fetch video data", err));
    }
  }, [videoId, dispatch, videoData]);

  const toggleDescription = () => setShowFull((prev) => !prev);

  return (
    <div
      className={`flex flex-col lg:flex-row transition-all duration-300 w-full min-h-screen ${
        isMenuOpen ? "pl-[272px]" : "pl-0"
      }`}
    >
      {/* Left side: Main Video + Comments */}
      <div className="w-full mt-6 lg:w-[70%] px-6 h-[calc(100vh-5rem)] overflow-y-auto">
        <div>
          <iframe
            width="100%"
            height="500"
            className="mt-5 rounded-xl aspect-video"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <p className="my-2 font-bold text-xl">{videoData?.snippet?.title}</p>

          <div className="rounded-lg bg-gray-100 p-4">
            <p className="text-sm font-semibold">
              {parseInt(videoData?.statistics?.viewCount).toLocaleString()} views ·{" "}
              {new Date(videoData?.snippet?.publishedAt).toLocaleDateString(
                "en-GB",
                { day: "2-digit", month: "short", year: "numeric" }
              )}
            </p>
            <div className="whitespace-pre-wrap leading-relaxed text-gray-800 mt-2 text-sm">
              <p>
                {showFull
                  ? videoData?.snippet?.description
                  : videoData?.snippet?.description
                      ?.split("\n")
                      .slice(0, 2)
                      .join("\n")}
              </p>

              {videoData?.snippet?.description?.split("\n").length > 2 && (
                <button
                  onClick={toggleDescription}
                  className="text-blue-600 font-semibold mt-2 hover:underline"
                >
                  {showFull ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          </div>
          <div className="w-full lg:w-[80%]">
            <CommentsContainer videoId={videoId} />
          </div>
        </div>
      </div>

      {/* Right side: Suggested */}
      <div className="w-full lg:w-[30%] h-[calc(100vh-5rem)] overflow-y-auto px-4 mt-6">
        <WatchButtonList
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          channelName={videoData?.snippet?.channelTitle}
        />
        <Suggested videoId={videoId} filter={selectedFilter} />
        <LiveChat />
      </div>
    </div>
  );
};

export default Watchpage;
