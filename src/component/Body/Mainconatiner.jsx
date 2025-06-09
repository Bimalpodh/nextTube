import React from 'react'
import { useSelector } from 'react-redux'
import ButtonList from './ButtonList/ButtonList'
import VideoContainer from './Videocontainer/VideoContainer'

const Mainconatiner = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
     <div
      className={`${
        isMenuOpen ? 'ml-[272px]' : 'ml-0'
      } h-[calc(100vh-4rem)] overflow-y-auto  transition-all duration-300`}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default Mainconatiner;
