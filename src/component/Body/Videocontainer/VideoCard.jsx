import { useSelector } from 'react-redux';

const VideoCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!info || !info.snippet || !info.statistics) return null;

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div
      className={`p-2 m-2 shadow-2xl rounded-lg transition-all duration-300 ${
        isMenuOpen ? "w-[350px]" : "w-[300px]"
      }`}
    >
      <img
        className={`rounded-lg w-full h-auto object-cover transition-all duration-300 ${
          isMenuOpen ? "max-h-[200px]" : "max-h-[160px]"
        }`}
        src={thumbnails?.maxres?.url || thumbnails?.high?.url}
        alt={title}
      />

      <ul className="mt-2">
        <li className="font-semibold text-sm">{title}</li>
        <li className="text-gray-600 text-sm">{channelTitle}</li>
        <li className="text-gray-500 text-xs">{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
