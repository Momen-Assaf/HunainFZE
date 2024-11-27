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
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className="w-16 h-16 object-cover"
            alt="Logo"
            src={logo}
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-[60px]">
          <ScrollableText targetSectionId="hero" text="Home" />
          <ScrollableText targetSectionId="aboutUs" text="About Us" />
          <ScrollableText targetSectionId="services" text="Services" />
          <ScrollableText targetSectionId="portfolio" text="Portfolio" />
          <CustomButton
            text="Contact Us"
            icon={arrowIcon}
            buttonClass=" w-[174px] h-[55px]"
          />
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
