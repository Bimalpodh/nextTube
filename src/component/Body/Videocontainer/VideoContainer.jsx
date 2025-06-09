import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOES_API } from "../../../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "../../shimmer/Shimmer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWatchVideoData } from "../../../ReduxStore/watchVideoDataSlice";

const countries = ["IN", "US", "GB", "JP", "AU", "AX", "BR", "CH", "FR", "ES"];

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

const getVideos = async () => {
  try {
    // Fetch Indian videos first
    const indiaRes = await fetch(`${YOUTUBE_VIDEOES_API}&regionCode=IN`);
    const indiaData = await indiaRes.json();
    const indiaVideos = indiaData?.items || [];

    // Fetch other countries (excluding IN)
    const otherCountries = countries.filter((code) => code !== "IN");
    const otherData = otherCountries.map((code) =>
      fetch(`${YOUTUBE_VIDEOES_API}&regionCode=${code}`).then((res) =>
        res.json()
      )
    );

    const otherResults = await Promise.all(otherData);
    const otherVideos = otherResults.flatMap((res) => res?.items || []);

    // Mix other videos randomly
    const mixedOthers = otherVideos.sort(() => 0.5 - Math.random());

    // Combine: Indian videos first, then others
    setVideos([...indiaVideos, ...mixedOthers]);
  } catch (err) {
    console.error("Failed to fetch YouTube videos:", err);
  } finally {
    setLoading(false);
  }
};


  if (loading) return <Shimmer />;

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link
          to={"/watch?v=" + video?.id}
          onClick={() => dispatch(setWatchVideoData(video))}
        >
          <VideoCard  key={video?.id?.videoId || video?.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
