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
    return (
        <div className={`w-[570px] h-[520px] flex flex-col ${cardName}`}
            style={{
                ...cardStyle
            }}>
            <div>
                <img src={logo} alt={cardTitle} />
            </div>

            <div className="text-start border-2 border-gray-300 w-full p-4 flex flex-col gap-y-3">
                <h2 className=""
                    style={{
                        fontFamily: theme.fonts.primary,
                        fontSize: theme.fontSize.mediumLarge,
                        fontWeight: theme.fontWeight.medium,
                        color: theme.colors.textDark,
                    }}>{cardTitle}</h2>

                <p style={{
                    fontFamily: theme.fonts.primary,
                    fontSize: theme.fontSize.medium,
                    color: theme.colors.textDark,
                    fontWeight: theme.fontWeight.light,
                }}>{cardDescription}</p>
                <p className="uppercase" style={{
                    fontFamily: theme.fonts.secondary,
                    fontSize: theme.fontSize.smallMedium,
                    color: theme.colors.primary,
                    fontWeight: theme.fontWeight.bold,
                    letterSpacing: "2px",

                }}>{cardTags}</p>
            </div>
        </div>
    )
}

export default ProjectCard;