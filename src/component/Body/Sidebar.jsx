import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early returning
  if (!isMenuOpen) return null;

  return (
    <div className={`text-lg text-black bg-white lg:w-[272px] h-[calc(100vh-5rem)] overflow-y-auto p-4 fixed top-20 left-0 md:w-[220px] sm:w-[120px]`}>
      <div className="m-4 list-none ">
        <div className="sec1 border-b border-gray-500 p-2  ">
          <Link to={"/"}>
            <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer ">
              <img
                src="home.png"
                className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
                alt="home"
              />
              <li className="pl-4 mb-1 ">Home</li>
            </div>
          </Link>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer">
            <img
              src="shots.png"
              className="h-7 mt-1 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="shorts"
            />
            <li className="pl-4 mb-1 ">Shorts</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer ">
            <img
              src="subscription.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="subscription"
            />
            <li className="pl-4 mb-1 ">Subscription</li>
          </div>
        </div>

        <div className="sec2 border-b p-2 border-gray-500 list-none">
          <h1 className="text-2xl mb-4">You</h1>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer ">
            <img
              src="history.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="history"
            />
            <li className="pl-4 mb-1 ">History</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer ">
            <img
              src="playlist.png"
              className="h-7 filter brightness-0 invert-0 sepia saturate-100 hue-rotate-20"
              alt="playlist"
            />
            <li className="pl-4 mb-1 ">Playlist</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer ">
            <img
              src="video.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="videoes"
            />
            <li className="pl-4 mb-1 ">videoes</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer ">
            <img
              src="course.png"
              className="h-7 filter brightness-0 invert-0 sepia saturate-100 hue-rotate-20"
              alt="courses"
            />
            <li className="pl-4 mb-1 ">courses</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer ">
            <img
              src="time.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="watch-later"
            />
            <li className="pl-4 mb-1 ">Watch Later</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer ">
            <img
              src="like.png"
              className="h-7 filter brightness-0 invert-0 sepia saturate-100 hue-rotate-20"
              alt="lv"
            />
            <li className="pl-4 mb-1 ">Liked videoes</li>
          </div>
        </div>
        <div className="sec3 border-b border-gray-400 list-none p-2">
          <h1 className="text-2xl mb-4">Explore</h1>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer ">
            <img
              src="trending.png"
              className="h-7 filter brightness-0 invert-0 sepia saturate-100 hue-rotate-20"
              alt="Trending"
            />
            <li className="pl-4 mb-1 ">Trending</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer ">
            <img
              src="bag.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="shopping"
            />
            <li className="pl-4 mb-1 ">Shopping</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer ">
            <img
              src="music.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="mmusic"
            />
            <li className="pl-4 mb-1 ">Music</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer">
            <img
              src="videos.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="film"
            />
            <li className="pl-4 mb-1 ">Films</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer">
            <img
              src="live.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="live"
            />
            <li className="pl-4 mb-1 ">Live</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer">
            <img
              src="gaming.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="gaming"
            />
            <li className="pl-4 mb-1 ">Gaming</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer">
            <img
              src="news.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="news"
            />
            <li className="pl-4 mb-1 ">News</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer">
            <img
              src="trophy.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="sports"
            />
            <li className="pl-4 mb-1 ">Sports</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer">
            <img
              src="woman.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="fashion"
            />
            <li className="pl-4 mb-1 ">Fashion & beauty</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer">
            <img
              src="podcasting.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="podcast"
            />
            <li className="pl-4 mb-1 ">Podcasts</li>
          </div>
        </div>
        <div className="sec4 mt-1  border-b border-gray-400 p-2">
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer">
            <img
              src="settings.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="setting"
            />
            <li className="pl-4 mb-1 ">Settings</li>
          </div>
          <div className="flex hover:bg-gray-400 hover:p-1  hover:rounded-2xl cursor-pointer">
            <img
              src="feedback.png"
              className="h-7 filter brightness-0 invert-0  sepia saturate-100 hue-rotate-20"
              alt="feedback"
            />
            <li className="pl-4 mb-1 ">send feedback</li>
          </div>
        </div>
        <div className="sec5-footer mt-5 mb-10 opacity-45">
          <footer className="">
            <div className="text-sm">
              <label className=" "> About</label>
              <label className="pl-1 "> Press</label>
              <label className="p-1 "> Copyright</label>
              <label className="pl-1 "> Contact us</label>
              <label className="p-1 "> Creator</label>
              <label className="p-1 "> Advertise</label>
              <label className="p-1 "> Developers</label>
            </div>
            <div className="text-sm ">
              <label className="">Terms</label>
              <label className="p-1 ">Privacy</label>
              <label className="p-1 ">Policy & safety</label>
              <label className="p-1 ">How youtube work</label>
              <label className="p-1 ">Test new features</label>
              <p className="mb-1 ">© 2025 Bimal Podh</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
