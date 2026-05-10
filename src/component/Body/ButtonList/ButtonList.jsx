import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "All",
  "Music",
  "Gaming",
  "News",
  "Live",
  "Sports",
  "Movies",
  "Podcasts",
  "Coding",
  "AI",
  "ReactJS",
  "Web Development",
  "Technology",
  "Fashion",
  "Learning",
  "Trailers",
  "Nature",
];

const ButtonList = ({ selectedCategory, onCategoryChange }) => {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftBtn(scrollLeft > 0);
      setShowRightBtn(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative bg-white sticky top-0 z-20 px-4 py-3 flex items-center border-b border-gray-100 shadow-sm">
      {/* Left Arrow Button */}
      {showLeftBtn && (
        <div className="absolute left-0 z-30 h-full flex items-center bg-gradient-to-r from-white via-white to-transparent pr-8">
          <button
            onClick={() => scroll("left")}
            className="bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition-all active:scale-90 border border-gray-100 ml-2"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      )}

      {/* Categories Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-3 items-center px-2 transition-all w-full"
        style={{ scrollBehavior: "smooth" }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            name={cat}
            isActive={selectedCategory === cat}
            onClick={() => onCategoryChange(cat)}
            className="mx-0 my-0" 
          />
        ))}
      </div>

      {/* Right Arrow Button */}
      {showRightBtn && (
        <div className="absolute right-0 z-30 h-full flex items-center bg-gradient-to-l from-white via-white to-transparent pl-8">
          <button
            onClick={() => scroll("right")}
            className="bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition-all active:scale-90 border border-gray-100 mr-2"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonList;