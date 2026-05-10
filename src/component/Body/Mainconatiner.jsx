import React from 'react'
import { useSelector } from 'react-redux'
import ButtonList from './ButtonList/ButtonList'
import VideoContainer from './Videocontainer/VideoContainer'

const Mainconatiner = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  return (
    <div
      className={`transition-all duration-300 w-full min-h-[calc(100vh-5rem)] overflow-y-auto ${
        isMenuOpen ? "pl-[272px]" : "pl-0"
      }`}
    >
      <ButtonList
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <VideoContainer selectedCategory={selectedCategory} />
    </div>
  );
};

export default Mainconatiner;
