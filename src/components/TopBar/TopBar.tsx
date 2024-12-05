import CustomButton from "../CustomButton";
import ScrollableText from "../ScrollableText";
import { logo, arrowIcon } from "../../assets";
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
          <img src={arrowIcon} alt="Menu Icon" className="w-6 h-6 bg-slate-700" />
        </button>

        {/* Mobile DropDown Menu */}
        {isMenuOpen && (
          <div
            style={{
              backgroundColor: theme.colors.background_secondary,
            }}
          >
            <MenuItems className="flex flex-col items-center lg:hidden" />
          </div>
        )}

      </div>
    </div>

  );
};

export default TopBar;
