import { vrZoneLogo, vrZoneHover, vrZoneUrl, blueBirdLogo, blueBirdHover, blueBirdUrl } from "../../../assets";
import theme from "../../../theme";
import ProjectCard from "../../../components/ProjectCard";

const OurProjects = () => {
    return (
        <section className="py-[120px]" id="ourProjects">
            {/* Header */}
            <div className="text-center mb-[219px]">
                <h2
                    style={{
                        fontFamily: theme.fonts.primary,
                        fontSize: theme.fontSize.heading1,
                        fontWeight: theme.fontWeight.extraBold,
                    }}
                >
                    <span style={{ color: theme.colors.textDark }}>Our </span>
                    <span style={{ color: theme.colors.primary }}>Projects</span>
                </h2>
            </div>
            <div className="container mx-auto flex flex-wrap justify-center">
                <ProjectCard
                    logo={vrZoneLogo}
                    hoverImg={vrZoneHover}
                    url={vrZoneUrl}
                    className="z-10"
                    cardStyle={{
                        transform: "rotate(-15deg)",
                        margin: "-45px -45px",
                    }}
                />
                <ProjectCard
                    logo={blueBirdLogo}
                    hoverImg={blueBirdHover}
                    url={blueBirdUrl}
                    cardStyle={{
                        margin: "0 -45px",
                    }}
                />
            </div>
        </section>
    );
};

export default OurProjects;
