import React, { useState } from "react";

const HoverCard = ({
  defaultImg = "/default-image.png",
  hoverImg = "/hover-image.png",
  url = "https://example.com",
}) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      className="w-[600px] h-[274px] bg-[#363636] rounded-[15px] flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <img
        src={hovered ? hoverImg : defaultImg}
        alt="Logo"
        className="w-[150px] h-auto" // Adjust width and height of the logo as needed
      />
    </div>
  );
};

export default HoverCard;
