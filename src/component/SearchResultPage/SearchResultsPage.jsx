import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { YOUTUBE_SEARCH_RESULT_API } from "../../utils/constants";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); // 👈 Get sidebar state

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(YOUTUBE_SEARCH_RESULT_API + query);
        const json = await res.json();
        setResults(json.items || []);
      } catch (err) {
        console.error("Search failed", err);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query]);

  if (loading) return <p className="p-6 text-lg">Loading...</p>;

  return (
    <div
      className={`transition-all duration-300 px-4 pt-6 w-full ${
        isMenuOpen ? "ml-[272px]" : "ml-0"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">
        Search results for "<span className="text-blue-600">{query}</span>"
      </h2>

      <div className="flex flex-col gap-4">
        {results.map((video) =>
          video.id.videoId ? (
            <Link
              key={video.id.videoId}
              to={`/watch?v=${video.id.videoId}`}
              className="flex flex-col sm:flex-row gap-4 p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full sm:w-[420px] h-[240px] rounded-xl object-cover"
              />

              <div className="flex flex-col">
                <h3 className="text-md font-bold">{video.snippet.title}</h3>
                <p className="text-sm text-gray-700">
                  {video.snippet.channelTitle}
                </p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {video.snippet.description}
                </p>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
