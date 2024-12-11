import { useState } from "react";
import theme from "../theme";

const ProjectCard = ({
  logo = "/default-image.png",
  hoverImg = "/hover-image.png",
  url = "https://example.com",
  className = "", // Default className (empty string)
  cardStyle = {},
}) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      className={`w-[600px] lg:h-[274px] rounded-[15px] flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        background: theme.colors.textDark,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? "0px 10px 20px rgba(0, 0, 0, 0.2)" : "none", // Add shadow on hover
        ...cardStyle,
      }}
    >
      <div className="relative w-full h-full">
        <img
          src={logo}
          alt="Logo"
          className={`absolute w-full h-full object-cover transition-opacity duration-300 ease-in-out ${hovered ? "opacity-0" : "opacity-100"}`} // Default image
        />
        <img
          src={hoverImg}
          alt="Hovered Logo"
          className={`absolute w-full h-full object-cover transition-opacity duration-300 ease-in-out ${hovered ? "opacity-100" : "opacity-0"}`} // Hovered image
        />
      </div>
    </div>
  );
};

export default ProjectCard;
