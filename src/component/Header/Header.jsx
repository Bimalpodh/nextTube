// components/Header/Header.jsx
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../ReduxStore/appSlice";
import SearchBar from "./SearchBar";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 w-screen bg-white h-20 px-4 shadow-md z-50">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-3">
        <img
          src="hamburger.png"
          alt="hamburger"
          className="h-5 cursor-pointer filter brightness-0 invert-0"
          onClick={() => dispatch(toggleMenu())}
        />
        <img src="youtube.png" alt="logo" className="h-8" />
        <span className="hidden md:inline text-black text-xl font-semibold">
          NextTube
        </span>
      </div>

      {/* Center: SearchBar */}
      <div className="flex-1 flex justify-center px-4">
        <SearchBar />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="bg-[#363738] h-10 w-24 hidden md:flex items-center justify-center rounded-full text-white hover:bg-[#505253] text-sm">
          + Create
        </button>
        <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#afcbda]">
          <img
            src="notification-bell.png"
            alt="bell"
            className="h-5 sm:h-6 filter brightness-0 invert-0"
          />
        </div>
        <img
          src="user.png"
          alt="user"
          className="h-8 w-8 cursor-pointer rounded-full filter brightness-0 invert-0 object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
