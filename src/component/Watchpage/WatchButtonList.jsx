import React from "react";
import Button from "../Body/ButtonList/Button";

const WatchButtonList = ({ selectedFilter, onFilterChange, channelName }) => {
  const filters = ["All", "Related", "Live", "Recently uploaded", "Watched"];
  if (channelName) {
    filters.splice(1, 0, `From ${channelName}`);
  }

  return (
    <div className="flex overflow-x-auto scrollbar-hide py-2 bg-white sticky top-0 z-10 gap-1">
      {filters.map((filter) => (
        <Button
          key={filter}
          name={filter}
          isActive={selectedFilter === filter}
          onClick={() => onFilterChange(filter)}
          className="mx-1 my-1"
        />
      ))}
    </div>
  );
};

export default WatchButtonList;
