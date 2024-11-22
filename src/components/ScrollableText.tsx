const ScrollableText = ({
    text = "Click Me", // Default text
    targetSectionId = "default-section", // Default target section 
    className = "", // Default className (empty string)
}) => {
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
            className="text-gray-800 cursor-pointer transition-colors hover:text-[#1E407D]"
            onClick={handleClick}
        >
            {text}
        </span>
    );
};

export default ScrollableText;
