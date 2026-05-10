import { memo } from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet) return null;

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;
  const viewCount = statistics?.viewCount 
    ? parseInt(statistics.viewCount).toLocaleString() 
    : "New";

  return (
    <div className="flex flex-col gap-3 group cursor-pointer w-full max-w-[360px] mb-8">
      {/* Thumbnail Container */}
      <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-100">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={thumbnails?.high?.url || thumbnails?.medium?.url}
          alt={title}
          loading="lazy"
        />
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-black/60 p-3 rounded-full text-white">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info Container */}
      <div className="flex gap-3 px-1">
        {/* Channel Avatar Placeholder */}
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
          {channelTitle?.charAt(0)}
        </div>

        <div className="flex flex-col gap-1 overflow-hidden">
          <h3 className="font-bold text-base leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          
          <div className="flex flex-col text-sm text-gray-600">
            <p className="hover:text-black transition-colors">{channelTitle}</p>
            <div className="flex items-center gap-1">
              <span>{viewCount} views</span>
              <span className="text-[10px]">●</span>
              <span>{new Date(publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(VideoCard);
