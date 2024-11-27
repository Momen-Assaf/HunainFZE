import { useState } from "react";
import theme from "../theme";

const ProjectCard = ({
  defaultImg = "/default-image.png",
  hoverImg = "/hover-image.png",
  url = "https://example.com",
  className = "", // Default className (empty string)
}) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      className={`w-[600px] h-[274px] rounded-[15px] flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        background: theme.colors.textDark,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? "0px 10px 20px rgba(0, 0, 0, 0.2)" : "none", // Add shadow on hover
      }}
    >
      <img
        src={hovered ? hoverImg : defaultImg}
        alt="Logo"
        className="w-[150px] h-auto transition-all duration-300 ease-in-out" // Smooth transition for image change
        style={{
          transform: hovered ? "scale(1.1)" : "scale(1)", // Scale up the image on hover
        }}
      />
    </div>
  );
};

export default ProjectCard;
