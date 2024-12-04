import theme from "../theme";

const CustomButton = ({
    text = "Contact Us",
    icon = "",
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
                fontSize: theme.fontSize.paragraph,
                borderRadius: theme.borderRadius.md,
                boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.2)`,
            }}
        >
            <span>{text}</span>
            {icon && (
                <img
                    src={icon}
                    alt="Icon"
                />
            )}
        </button>
    );
};

export default CustomButton;
