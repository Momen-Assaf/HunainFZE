import CustomButton from "./CustomButton";
import ScrollableText from "./ScrollableText";
import { logo, arrowIcon } from "../assets"
import theme from "../theme";

const TopBar = () => {
  return (
    <div className="w-full shadow-md"
      style={{
        backgroundColor: theme.colors.background_secondary,
        // borderRadius: theme.borderRadius.lg,
      }}>
      <div className="w-3/4 mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className="w-16 h-16 object-cover"
            alt="Logo"
            src={logo}
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-[40px]">
          <ScrollableText targetSectionId="hero" text="Home" />
          <ScrollableText targetSectionId="aboutUs" text="About Us" />
          <ScrollableText targetSectionId="ourServices" text="Services" />
          <ScrollableText targetSectionId="ourProjects" text="Portfolio" />
          <CustomButton
            text="Contact Us"
            icon={arrowIcon}
            buttonClass=" w-[160px] h-[50px]"
          />
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
