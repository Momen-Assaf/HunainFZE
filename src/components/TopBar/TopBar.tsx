import CustomButton from "../CustomButton";
import ScrollableText from "../ScrollableText";
import { logo, arrowIcon, menuIcon } from "../../assets";
import theme from "../../theme";
import { useState } from "react";
import MenuItems from "./MenuItems";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div
      className="w-full shadow-md"
      style={{
        backgroundColor: theme.colors.background_secondary,
        // borderRadius: theme.borderRadius.lg,
      }}
    >
      <div className="w-11/12 lg:w-3/4 mx-auto flex items-center justify-between px-4 py-3 lg:px-6 lg:py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className="w-12 h-12 lg:w-16 lg:h-16 object-cover"
            alt="Logo"
            src={logo}
          />
        </div>

        {/* Normal Menu */}
        <MenuItems className="hidden lg:flex items-center space-x-[20px] lg:space-x-[40px]" />


        <button
          onClick={toggleMenu}
          className="lg:hidden p-2"
          aria-label="Open Menu">
          <img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />
        </button>

        {/* Sliding Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/5 max-w-sm shadow-lg transform z-20 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          style={{
            backgroundColor: theme.colors.background_secondary,
          }}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2"
            aria-label="Close Menu"
          >
            <img src={menuIcon} alt="Close Icon" className="w-6 h-6" />
          </button>

          <MenuItems className="flex flex-col items-center space-y-6 mt-16" />
        </div>

      </div>
    </div>

  );
};

export default TopBar;
