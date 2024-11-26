import theme from "../theme"; // Assuming theme is defined and imported

const CustomButton = ({ 
    text = "Contact Us", 
    icon = "→", // Default arrow icon
    buttonClass = "", 
    onClick = () => {} 
}) => {
    return (
        <button
            onClick={onClick}
            className={`relative flex items-center justify-center gap-2 w-full sm:w-60 h-12 sm:h-14 bg-[${theme.colors.primary}] text-white font-semibold text-base sm:text-xl rounded-[${theme.borderRadius.md}] hover:bg-opacity-90 transition-all ${buttonClass}`}
            style={{
                fontFamily: theme.fonts.primary,
                boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.2)`,
            }}
        >
            <span>{text}</span>
            <span className="text-lg sm:text-xl">{icon}</span>
        </button>
    );
};

export default CustomButton;
