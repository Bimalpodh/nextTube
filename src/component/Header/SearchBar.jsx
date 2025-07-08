// components/Header/SearchBar.jsx
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../../ReduxStore/searchSlice";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() === "") return;
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        fetchSuggestions();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchSuggestions = async () => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await res.json();
      setSuggestions(json[1]);
      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (err) {
      console.error("Error fetching suggestions", err);
    }
  };

  const handleSearch = (query) => {
    if (!query.trim()) return;
    navigate(`/results?search_query=${encodeURIComponent(query)}`);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-[750px]">
      <div className="flex">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch(searchQuery)}
          className="w-full border border-gray-300 h-12 px-4 text-black outline-none rounded-l-full text-base focus:border-blue-700"
        />
        <button
          className="border border-gray-300 bg-[#fafafa] w-16 h-12 rounded-r-full hover:bg-[#e5e8eb] flex items-center justify-center"
          onClick={() => handleSearch(searchQuery)}
        >
          <img
            src="search.png"
            alt="search"
            className="h-5 filter invert"
          />
        </button>
        <button className="ml-2 h-12 w-12 rounded-full bg-[#df9e25] hover:bg-[#96a8bb] flex items-center justify-center">
          <img
            src="mic.png"
            alt="mic"
            className="h-5 filter invert"
          />
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute top-14 left-0 w-full bg-white shadow-xl z-50 rounded-xl p-2">
          {suggestions.map((sug, index) => (
            <li
              key={index}
              onClick={() => handleSearch(sug)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img src="search.png" className="h-4" alt="search" />
              <span>{sug}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
