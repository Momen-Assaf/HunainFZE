import React from "react";
import theme from "../theme"; // Ensure theme is imported correctly

const CustomButton = ({ 
    text = "Contact Us", 
    icon = "→", // Default arrow icon
    buttonClass = "", 
    onClick = () => {} 
}) => {
    return (
        <button
            onClick={onClick}
            className={`relative flex items-center justify-center gap-2 hover:opacity-90 transition-all ${buttonClass}`}
            style={{
                backgroundColor: theme.colors.primary, // Theme-based background color
                fontFamily: theme.fonts.primary, // Theme-based font family
                fontSize: theme.fontSize.medium,
                fontWeight: theme.fontWeight.semiBold, // Semi-bold weight
                color: theme.colors.textLight,
                width: "174px", // Fixed width
                height: "55px", // Fixed height
                borderRadius: theme.borderRadius.md, // Fallback for missing theme values
                boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.2)`, // Box shadow
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
            }}
        >
            <span>{text}</span>
            <span style={{ fontSize: "20px" }}>{icon}</span>
        </button>
    );
};

export default CustomButton;
