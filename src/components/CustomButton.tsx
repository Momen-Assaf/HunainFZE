import React from "react";
import theme from "../theme"; // Ensure your theme is imported

const CustomButton = ({
    text = "Contact Us",
    icon = "→", // Default arrow icon
    buttonClass = "",
    onClick = () => { }
}) => {
    return (
        <button
            onClick={onClick}
            className={`relative flex items-center justify-center gap-2 ${buttonClass} text-white font-semibold text-base sm:text-xl rounded-md hover:opacity-90 transition-all`}
            style={{
                backgroundColor: theme.colors.primary,
                fontFamily: theme.fonts.primary,
                borderRadius: theme.borderRadius.md,
                boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.2)`,
            }}
        >
            <span>{text}</span>
            {/* Conditionally render icon if available */}
            {icon && (
                <img
                    src={icon}
                    alt="Icon"
                    className="w-4 h-4" // Adjust size as needed
                />
            )}
        </button>
    );
};

export default CustomButton;
