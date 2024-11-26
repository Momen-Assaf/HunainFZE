import CustomButton from "./CustomButton";
import ScrollableText from "./ScrollableText";

const image1 = "https://via.placeholder.com/100";

const TopBar = () => {
  return (
    <div className="w-full bg-[#fbfbfb] shadow-md rounded-b-[25px]">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className="w-16 h-16 object-cover"
            alt="Logo"
            src={image1}
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-[60px]">
          <ScrollableText targetSectionId="home" text="Home" />
          <ScrollableText targetSectionId="about" text="About Us" />
          <ScrollableText targetSectionId="services" text="Services" />
          <ScrollableText targetSectionId="portfolio" text="Portfolio" />
          <CustomButton
            text="Contact Us"
            icon="/assets/images/icons/arrow_right.svg"
            buttonClass=" w-[174px] h-[55px]"
          />
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
