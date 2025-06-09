import { useDispatch } from "react-redux";
import { toggleMenu } from "../../ReduxStore/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 w-full bg-black h-16 px-4 shadow-md z-50">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-3">
        <img
          src="src/assets/img/hamburger.png"
          alt="hamburger"
          className="h-5 cursor-pointer filter invert"
          onClick={toggleSidebar}
        />

        
        <img src="src/assets/img/youtube.png" alt="logo" className="h-8" />
        <span className="text-white text-2xl font-semibold">NextTube</span>
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center gap-3 max-w-[600px] w-full mx-6">
        <div className="flex flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border border-gray-500 h-10 px-4 text-white outline-none w-full rounded-l-full"
          />
          <button className="bg-[#363738] w-12 h-10 rounded-r-full hover:bg-[#505253] flex items-center justify-center">
            <img
              src="src/assets/img/search.png"
              alt="searchIcon"
              className="h-5 filter invert"
            />
          </button>
        </div>
        <button className="bg-[#363738] h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#505253]">
          <img
            src="src/assets/img/mic.png"
            alt="micIcon"
            className="h-5 filter invert"
          />
        </button>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <button className="bg-[#363738] h-10 px-4 rounded-full text-white hover:bg-[#505253]">
          + Create
        </button>
        <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#505253]">
          <img
            src="src/assets/img/notification-bell.png"
            alt="bell"
            className="h-6 filter invert"
          />
        </div>
        <img
          src="src/assets/img/user.png"
          alt="user"
          className="h-8 w-8 rounded-full filter invert object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
