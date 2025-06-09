import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early returning
  if (!isMenuOpen) return null;

  return (
    <div className="text-lg text-white bg-black w-[272px] h-[calc(100vh-4rem)] overflow-y-auto p-4 fixed top-16 left-0 z-50">
      <div className="m-4 list-none ">
        <div className="sec1 border-b border-gray-500  ">
          <Link to={"/"}>
            <div className="flex">
              <img
                src="src\assets\img\home.png"
                className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
                alt="home"
              />
              <li className="pl-4 mb-2">Home</li>
            </div>
          </Link>
          <div className="flex">
            <img
              src="src\assets\img\shots.png"
              className="h-7 mt-1 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="shorts"
            />
            <li className="pl-4 mb-2">Shorts</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\subscription.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="subscription"
            />
            <li className="pl-4 mb-2">Subscription</li>
          </div>
        </div>

        <div className="sec2 border-b border-gray-500 list-none">
          <h1 className="text-2xl mb-4">You</h1>
          <div className="flex">
            <img
              src="src\assets\img\history.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="history"
            />
            <li className="pl-4 mb-2">History</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\playlist.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="playlist"
            />
            <li className="pl-4 mb-2">Playlist</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\video.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="videoes"
            />
            <li className="pl-4 mb-2">videoes</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\course.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="courses"
            />
            <li className="pl-4 mb-2">courses</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\time.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="watch-later"
            />
            <li className="pl-4 mb-2">Watch Later</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\like.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="lv"
            />
            <li className="pl-4 mb-2">Liked videoes</li>
          </div>
        </div>
        <div className="sec3 border-b border-gray-400 list-none">
          <h1 className="text-2xl mb-4">Explore</h1>
          <div className="flex">
            <img
              src="src\assets\img\trending.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="Trending"
            />
            <li className="pl-4 mb-2">Trending</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\bag.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="shopping"
            />
            <li className="pl-4 mb-2">Shopping</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\music.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="mmusic"
            />
            <li className="pl-4 mb-2">Music</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\videos.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="film"
            />
            <li className="pl-4 mb-2">Films</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\live.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="live"
            />
            <li className="pl-4 mb-2">Live</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\gaming.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="gaming"
            />
            <li className="pl-4 mb-2">Gaming</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\news.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="news"
            />
            <li className="pl-4 mb-2">News</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\trophy.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="sports"
            />
            <li className="pl-4 mb-2">Sports</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\woman.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="fashion"
            />
            <li className="pl-4 mb-2">Fashion & beauty</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\podcasting.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="podcast"
            />
            <li className="pl-4 mb-2">Podcasts</li>
          </div>
        </div>
        <div className="sec4 mt-2 border-b border-gray-400">
          <div className="flex">
            <img
              src="src\assets\img\settings.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="setting"
            />
            <li className="pl-4 mb-2">Settings</li>
          </div>
          <div className="flex">
            <img
              src="src\assets\img\feedback.png"
              className="h-7 filter invert brightness-0 sepia saturate-100 hue-rotate-20"
              alt="feedback"
            />
            <li className="pl-4 mb-2">send feedback</li>
          </div>
        </div>
        <div className="sec5-footer mt-5 mb-10 opacity-45">
          <footer className="">
            <div className="text-sm">
              <label className=" "> About</label>
              <label className="pl-2"> Press</label>
              <label className="p-2"> Copyright</label>
              <label className="pl-2"> Contact us</label>
              <label className="p-2"> Creator</label>
              <label className="p-2"> Advertise</label>
              <label className="p-2"> Developers</label>
            </div>
            <div className="text-sm ">
              <label className="">Terms</label>
              <label className="p-2">Privacy</label>
              <label className="p-2">Policy & safety</label>
              <label className="p-2">How youtube work</label>
              <label className="p-2">Test new features</label>
              <p className="mb-2">© 2025 Bimal Podh</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
