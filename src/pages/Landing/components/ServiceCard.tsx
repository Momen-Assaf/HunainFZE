import { useState } from "react";
import theme from "../../../theme";

const ServiceCard = ({
    title = "Service Title",
    description = "Lorem ipsum dolor sit amet consectetur. Pretium ac enim sapien egestas aenean dapibus. Diam nunc morbi rutrum aliquam sit sit lacus.",
    iconSrc = "../logo.svg",
    className = "",
    logoClass = "",
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative w-[400px] h-[400px] px-[25px] pt-10 hover:scale-105 transition-transform border ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                borderColor: isHovered ? theme.colors.primary : theme.colors.cardBorder,
                boxShadow: theme.boxShadow.serviceCard,
                borderRadius: theme.borderRadius.lg,
                transition: "border-color 0.3s ease-in-out",
            }}
        >
            <img
                className={`${logoClass} mx-auto mb-2`}
                alt="Icon"
                src={iconSrc}
            />
            <h3 className="text-center"
                style={{
                    color: theme.colors.textDark,
                    fontFamily: theme.fonts.primary,
                    fontSize: theme.fontSize.large,
                    fontWeight: theme.fontWeight.extraBold,
                }}>
                {title}
            </h3>
            <p className="text-center py-[33px]"
                style={{
                    color: theme.colors.textDark,
                    fontFamily: theme.fonts.primary,
                    fontSize: theme.fontSize.paragraph,
                    fontWeight: theme.fontWeight.light,
                }}>
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;
