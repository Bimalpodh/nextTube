import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../ReduxStore/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API } from "../../utils/constants";
import { setWatchVideoData } from "../../ReduxStore/watchVideoDataSlice";
import Suggested from "./Suggested";
import CommentsContainer from "./CommentsContainer";

const Watchpage = () => {
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  const videoData = useSelector((store) => store?.watchVideoData?.videoInfo);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    if (!videoData && videoId) {
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
    <div className={`flex ${isMenuOpen ? "ml-[272px]" : "ml-0"} transition-all`}>
      {/* Left side: Main Video + Comments */}
      <div className="flex-1 max-w-[70%] px-6 overflow-y-auto h-[calc(100vh-4rem)]">
        <div>
          <iframe
            width="100%"
            height="600"
            className="mt-5 rounded-xl"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <p className="my-2 font-bold text-xl">{videoData?.snippet?.title}</p>

          <div className="rounded-lg bg-gray-200 p-3">
            <p className="text-md font-semibold">
              {videoData?.statistics?.viewCount} views ·{" "}
              {new Date(videoData?.snippet?.publishedAt).toLocaleDateString(
                "en-GB",
                { day: "2-digit", month: "short", year: "numeric" }
              )}
            </p>
            <div className="whitespace-pre-wrap leading-relaxed text-gray-800 mt-2">
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
                  className="text-blue-600 font-semibold mt-2"
                >
                  {showFull ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          </div>

          <CommentsContainer videoId={videoId} />
        </div>
      </div>

      {/* Right side: Suggested */}
      <div className="w-[30%] h-[calc(100vh-4rem)] overflow-y-auto px-4">
        <Suggested videoId={videoId}/>
      </div>
    </div>
  );
};

export default Watchpage;
