import { useState } from "react";
import theme from "../theme";

// Define the type for ProjectCard props
interface ProjectCardProps {
    logo: string;
    hoverImg: string[];  // Define hoverImg as an array of strings
    url?: string;
    cardName?: string;
    cardStyle?: React.CSSProperties;
    cardTitle: string;
    cardDescription: string;
    cardTags: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    logo = "",
    hoverImg = [],
    url = "",
    cardName = "",
    cardStyle = {},
    cardTitle = "",
    cardDescription = "",
    cardTags = "",
}) => {
    const [hovered, setHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClick = () => {
        if (url) {
            window.open(url);
        }
    };

    // Handle mouse hover state and change the image index
    const handleMouseEnter = () => {
        setHovered(true);
        let index = 0;
        const interval = setInterval(() => {
            setCurrentImageIndex(index);
            index = (index + 1) % hoverImg.length;
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on mouse leave
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setCurrentImageIndex(0); // Reset to the first image when not hovered
    };

    return (
        <div
            className={`w-[570px] h-[520px] flex flex-col ${cardName}`}
            style={{
                ...cardStyle,
            }}
        >
            {/* Image container */}
            <div
                className="w-[570px] h-[330px] relative overflow-hidden"
                style={{
                    borderTopLeftRadius: theme.borderRadius.sm,
                    borderTopRightRadius: theme.borderRadius.sm,
                }}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Default logo */}
                <img
                    src={logo}
                    alt={cardTitle}
                    className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"
                        }`}
                />

                {/* Loop through all hover images with a delay on each image */}
                {hoverImg.length > 0 &&
                    hoverImg.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${cardTitle} Hover ${index + 1}`}
                            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${hovered && currentImageIndex === index ? "opacity-100" : "opacity-0"
                                }`}
                        //   style={{
                        //     transitionDelay: `${index * 200}ms`, // Add delay for each image
                        //   }}
                        />
                    ))}
            </div>

            {/* Text container */}
            <div
                className="text-start border-2 border-gray-300 w-full p-6 flex flex-col gap-y-3"
                style={{
                    borderBottomLeftRadius: theme.borderRadius.sm,
                    borderBottomRightRadius: theme.borderRadius.sm,
                }}
            >
                <p
                    style={{
                        fontFamily: theme.fonts.primary,
                        fontSize: theme.fontSize.mediumLarge,
                        fontWeight: theme.fontWeight.medium,
                        color: theme.colors.textDark,
                    }}
                >
                    {cardTitle}
                </p>

                <p
                    style={{
                        fontFamily: theme.fonts.primary,
                        fontSize: theme.fontSize.medium,
                        color: theme.colors.textDark,
                        fontWeight: theme.fontWeight.light,
                        lineHeight: theme.fontSize.mediumLarge,
                    }}
                >
                    {cardDescription}
                </p>

                <p
                    className="uppercase"
                    style={{
                        fontFamily: theme.fonts.secondary,
                        fontSize: theme.fontSize.smallMedium,
                        color: theme.colors.primary,
                        fontWeight: theme.fontWeight.bold,
                        letterSpacing: theme.letterSpacing.lg,
                    }}
                >
                    {cardTags}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
