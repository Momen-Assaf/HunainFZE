import ScrollableText from "./ScrollableText";

const image1 = "https://via.placeholder.com/100";
const iconArrowRight = "https://via.placeholder.com/16x16";

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

        <div className="flex justify-between">

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            <ScrollableText targetSectionId="home" text="Home" />
            <ScrollableText targetSectionId="about" text="About Us" />
            <ScrollableText targetSectionId="services" text="Services" />
            <ScrollableText targetSectionId="portfolio" text="Portfolio" />
          </nav>

          {/* Contact Button */}
          <div className="flex items-center">
            <button className="flex items-center gap-2 px-6 py-2 bg-[#1e407d] text-white rounded-[15px] shadow hover:bg-[#15325d] transition">
              <span className="font-semibold text-lg">Contact Us</span>
              <img
                className="w-4 h-4"
                alt="Arrow Icon"
                src={iconArrowRight}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
