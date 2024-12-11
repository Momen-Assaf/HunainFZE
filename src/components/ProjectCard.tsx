import { useState } from "react";
import theme from "../theme";

const ProjectCard = ({
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

    const handleClick = () => {
        if (url) {
            window.open(url);
        }
    }
    return (
        <div
            className={`w-[570px] h-[520px] flex flex-col ${cardName}`}
            style={{
                ...cardStyle,
            }}
        >
            {/* Image container */}
            <div className="w-[570px] h-[330px]"
                style={{
                    borderRadius: `${theme.borderRadius.sm} ${theme.borderRadius.sm} 0px 0px`
                }}
                onClick={handleClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img
                    src={logo}
                    alt={cardTitle}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text container */}
            <div className="text-start border-2 border-gray-300 w-full p-6 flex flex-col gap-y-3"
                style={{
                    borderRadius: `0px 0px ${theme.borderRadius.sm} ${theme.borderRadius.sm}`,
                }}>
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
