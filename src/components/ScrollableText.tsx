import { useState } from "react";
import theme from "../theme";

const ScrollableText = ({
    text = "Click Me",
    targetSectionId = "default-section",
    className = "",
    size = "",
    font = theme.fonts.primary,
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                color: isHovered ? theme.colors.primary : theme.colors.textDark,
                fontSize: size,
                fontWeight: theme.fontWeight.semiBold,
                fontFamily: font,
                transition: "color 0.3s",
            }}
        >
            {text}
        </span>
    );
};

export default ScrollableText;
