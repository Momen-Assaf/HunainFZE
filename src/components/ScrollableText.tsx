import React, { useState } from "react";
import theme from "../theme"; // Import the theme

const ScrollableText = ({
    text = "Click Me", // Default text
    targetSectionId = "default-section", // Default target section
    className = "", // Default className (empty string)
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (targetSectionId) {
            const section = document.getElementById(targetSectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <span
            className={`cursor-pointer transition-colors ${className}`}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
            style={{
                color: isHovered ? theme.colors.primary : theme.colors.textDark, // Conditional color change
                fontSize: theme.fontSize.medium, // Use font size 20px from theme
                fontWeight: theme.fontWeight.semiBold, // Use semi-bold font weight
                fontFamily: theme.fonts.primary, // Apply primary font from theme
                transition: "color 0.3s", // Smooth color transition for hover
            }}
        >
            {text}
        </span>
    );
};

export default ScrollableText;
